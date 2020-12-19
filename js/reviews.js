const findBlockByAlias = (alias) => {
  return $(".reviews__item").filter((idx, item) => {
    return $(item).attr("data-linked") === alias;
  });
}

$(".interactive-avatar__link").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const parent = $this.closest(".interactive-avatar");
  parent.addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
  
  const target = $this.attr("data-open");
  const displayedItem = findBlockByAlias(target);
  displayedItem.addClass(ACTIVE_CLASS).siblings().removeClass(ACTIVE_CLASS);
})

