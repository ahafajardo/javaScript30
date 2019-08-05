const carousel = document.querySelector(".items");
let pressDown = false;
let startX;
let carouselScrollLeft;

carousel.addEventListener("mousedown", handleMouseDown);
carousel.addEventListener("mouseleave", handleMouseLeave);
carousel.addEventListener("mouseup", handleMouseUp);
carousel.addEventListener("mousemove", handleMouseMove);

function handleMouseDown(e) {
  pressDown = true;
  startX = e.pageX - carousel.offsetLeft;
  carouselScrollLeft = carousel.scrollLeft;
  carousel.classList.add("active");
}

function handleMouseLeave() {
  pressDown = false;
  carousel.classList.remove("active");
}

function handleMouseUp() {
  pressDown = false;
  carousel.classList.remove("active");
}

function handleMouseMove(e) {
  if (!pressDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const scrollVector = x - startX;
  carousel.scrollLeft = carouselScrollLeft - scrollVector;
}
