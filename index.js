const slides = document.querySelectorAll(".features__slider-slide");
const sliderContainer = document.querySelector(".features__slider");

function moveToFront(slide) {
  sliderContainer.prepend(slide);
}

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    moveToFront(slide);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    const firstSlide = slides[0];
    if (firstSlide.nextElementSibling) {
      moveToFront(firstSlide.nextElementSibling);
    }
  }

  if (event.key === "ArrowLeft") {
    const firstSlide = slides[0];
    if (firstSlide.previousElementSibling) {
      moveToFront(firstSlide.previousElementSibling);
    }
  }
});
