; (function () {
  const findBlockByAlias = (alias) => {
    return $(".reviews__item").filter((idx, item) => {
      return $(item).attr("data-linked") === alias;
    });
  }

  $(".interactive-avatar__link").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const parent = $this.closest(".interactive-avatar");
    parent.addClass("active").siblings().removeClass("active");

    const target = $this.attr("data-open");
    const displayedItem = findBlockByAlias(target);
    displayedItem.addClass("active").siblings().removeClass("active");
  })
})()

