let mainMenu = $(".mainmenu");
let subMenu = $(".submenu>li");
let header = $("header");

mainMenu
  .mouseover(function () {
    header.addClass("active");
    subMenu.stop().slideDown();
  })
  .mouseout(function () {
    header.removeClass("active");
    subMenu.stop().slideUp();
  });

// slide
let slideContainer = $(".container");
let slide = $(".slide");
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
  setInterval(function () {
    let nextIdx = (currentIdx + 1) % slideCount;
    slideContainer.animate({ marginLeft: -1200 * nextIdx + "px" });
    currentIdx = nextIdx;
  }, 3000);
}
autoSlide();

// popup
let popupLink = $(".notice_content > li:first");
let popup = $(".popup");
let closeBtn = $(".close");

popupLink.click(function (e) {
  e.preventDefault();
  popup.addClass("active");
});
closeBtn.click(function (e) {
  popup.removeClass("active");
});
