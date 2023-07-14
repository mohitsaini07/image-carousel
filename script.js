const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0];
let arrowIcons = document.querySelectorAll(".carousel_wrapper i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft +=
      icon.id == "left_icon" ? -firstImgWidth : firstImgWidth;
    showHideIcons();
  });
});

const dragStart = (e) => {
  //Updating global variables value on mouse down event-
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragStart = false;
};

const dragging = (e) => {
  //Scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
