; (function () {
  const blockWidth = item => {
    let itemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".products-menu");
    const titlesBlocks = container.find(".products-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      itemWidth = screenWidth - titlesWidth;
    } else {
      itemWidth = 500;
    }

    return {
      container: itemWidth,
      textContainer: itemWidth - paddingRight - paddingLeft
    }
  }

  const closeAllMenuItem = container => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeClass("active");
    content.width(0);
  }

  const openProductMenuItem = item => {
    const hiddenContent = item.find(".products-menu__content");
    const w = blockWidth(item);
    const textBlock = item.find(".products-menu__container");

    item.addClass("active");
    hiddenContent.width(w.container);
    textBlock.width(w.textContainer);
  }

  $(".products-menu__title").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");

    if (itemOpened) {
      closeAllMenuItem(container);
    } else {
      closeAllMenuItem(container);
      openProductMenuItem(item);
    }
  });
})()