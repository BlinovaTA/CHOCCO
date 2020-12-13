const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

hamburger.addEventListener("click", e => {
  e.preventDefault();

  hamburger.classList.toggle("hamburger--active");
  overlay.classList.toggle("overlay--active");
  body.classList.toggle("body--active");
});