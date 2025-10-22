document.addEventListener("DOMContentLoaded", function () {
  const quoteSection = document.querySelector(".quotes-section div");
  const quotes = document.querySelectorAll(".quotes-section div p");

  let currentSlideIndex = 0;

  setInterval(() => {
    if (currentSlideIndex < quotes.length - 1) {
      currentSlideIndex += 1;
    } else {
      currentSlideIndex = 0;
    }
    if (quoteSection) {
      quoteSection.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
  }, 5000);
});
