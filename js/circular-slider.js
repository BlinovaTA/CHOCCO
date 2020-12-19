const sliderList = document.querySelector(".slider__list");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    sliderList.appendChild(sliderList.firstElementChild);
  } else {
    sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
  }
}

leftArrow.addEventListener("click", function (e) {
  loop("left", e);
});

rightArrow.addEventListener("click", function (e) {
  loop("right", e);
});