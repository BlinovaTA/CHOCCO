; (function () {
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");
  const links = $(".overlay-menu__link");

  hamburger.addEventListener("click", e => {
    e.preventDefault();

    hamburger.classList.toggle("hamburger--active");
    overlay.classList.toggle("overlay--active");
    body.classList.toggle("body--active");
  });

  $(links).each((link) => {
    links.click(e => {
      $(".overlay").removeClass("overlay--active");
      $(body).removeClass("body--active");
      $(".hamburger").removeClass("hamburger--active");
    });
  });
})()