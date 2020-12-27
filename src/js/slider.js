; (function () {
  const slider = $(".slider__list").bxSlider({
    pager: false,
    controls: false,
  });

  $('.arrow-right').click(e => {
    e.preventDefault();

    slider.goToNextSlide();
  });

  $('.arrow-left').click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
  });
})()