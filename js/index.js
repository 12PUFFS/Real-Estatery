const slides = document.querySelectorAll(".features__slider-slide"); // Получение всех слайдов
const sliderContainer = document.querySelector(".features__slider"); // Получение контейнера слайдера

// Функция для перемещения слайда на первое место
function moveToFront(slide) {
  sliderContainer.prepend(slide);
}

// Перемещение слайда при клике
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    moveToFront(slide);
  });
});

// Управление слайдами с помощью стрелок влево и вправо
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
