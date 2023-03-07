/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
const configureSlider = slideshow => {
  const slides = slideshow.querySelectorAll(".slide");
  const previousButton = slideshow.querySelector(".arrow-previous");
  const nextButton = slideshow.querySelector(".arrow-next");
  if (slides.length === 0) {
    return;
  }
  let activeSlide = 0;
  slides[activeSlide].classList.add("active");
  const handleChangeActive = newActiveIndex => {
    slides[activeSlide].classList.remove("active");
    activeSlide = newActiveIndex;
    slides[activeSlide].classList.add("active");
  };
  const handlePreviousClick = () => handleChangeActive((activeSlide - 1 + slides.length) % slides.length);
  const handleNextClick = () => handleChangeActive((activeSlide + 1) % slides.length);
  previousButton.addEventListener("click", handlePreviousClick);
  nextButton.addEventListener("click", handleNextClick);
};
const configureSliders = () => {
  const slideshows = document.querySelectorAll(".wp-block-emt-slideshow");
  console.log("Found", slideshows.length, "slideshows");
  slideshows.forEach(configureSlider);
};
const isDocumentLoaded = () => document.readyState === "complete";
if (isDocumentLoaded()) {
  configureSliders();
} else {
  window.addEventListener("load", configureSliders);
}
console.log("lol?");
/******/ })()
;
//# sourceMappingURL=view.js.map