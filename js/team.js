const openItem = item => {
  const container = item.closest(".person");
  const content = container.find(".person__content");
  const contentBlock = content.find(".person__content-block");
  const contentBlockHeight = contentBlock.height();  
  const triangle = container.find(".triangle");

  container.addClass(ACTIVE_CLASS);
  triangle.addClass(ACTIVE_CLASS);
  content.height(contentBlockHeight);
}

const closeAll = container => {
  const items = container.find(".person__content");
  const itemContainer = container.find(".person");
  const triangle = itemContainer.find(".triangle");

  itemContainer.removeClass(ACTIVE_CLASS);
  triangle.removeClass(ACTIVE_CLASS);
  items.height(0);
}

$(".person__name").click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team");
  const itemContainer = $this.closest(".person");

  
  if(itemContainer.hasClass(ACTIVE_CLASS)) {
    closeAll(container);
  } else {
    closeAll(container);
    openItem($this);
  }  
})