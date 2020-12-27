; (function () {
  $(".slider__about-menu").mouseover(e => {
    const $this = $(e.currentTarget);
    const dropdown = $this.find(".slider__dropdown");

    $this.addClass("slider__about-menu--active");
    dropdown.addClass("dropdown--active");
  });

  $(".slider__about-menu").mouseout(e => {
    const $this = $(e.currentTarget);
    const dropdown = $this.find(".slider__dropdown");

    $this.removeClass("slider__about-menu--active");
    dropdown.removeClass("dropdown--active");
  });
})()