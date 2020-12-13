const aboutMenu = document.querySelector(".slider__about-menu");
const dropdown = document.querySelector(".slider__dropdown");

aboutMenu.addEventListener("mouseover", e => {
  e.preventDefault();

  dropdown.classList.add("dropdown--active");
  aboutMenu.classList.add("slider__about-menu--active");
});

aboutMenu.addEventListener("mouseout", e => {
  e.preventDefault();

  dropdown.classList.remove("dropdown--active");
  aboutMenu.classList.remove("slider__about-menu--active");
});