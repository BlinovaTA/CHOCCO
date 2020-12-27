; (function () {
  const openItem = item => {
    const container = item.closest(".person");
    const content = container.find(".person__content");
    const contentBlock = content.find(".person__content-block");
    const contentBlockHeight = contentBlock.height();
    const triangle = container.find(".triangle");

    container.addClass("active");
    triangle.addClass("active");
    content.height(contentBlockHeight);
  }

  const closeAll = container => {
    const items = container.find(".person__content");
    const itemContainer = container.find(".person");
    const triangle = itemContainer.find(".triangle");

    itemContainer.removeClass("active");
    triangle.removeClass("active");
    items.height(0);
  }

  $(".person__name").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team");
    const itemContainer = $this.closest(".person");


    if (itemContainer.hasClass("active")) {
      closeAll(container);
    } else {
      closeAll(container);
      openItem($this);
    }
  })
})()