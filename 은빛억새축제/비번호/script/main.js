let mainMenu = $(".main_menu > li");
let subMenu = $(".sub_menu");

mainMenu
  .mouseover(function () {
    subMenu.stop().slideDown();
  })
  .mouseout(function () {
    subMenu.stop().slideUp();
  });

let slideContainer = $(".container");
let slide = slideContainer.find(".slide");
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
  setInterval(function () {
    let nextIdx = (currentIdx + 1) % slideCount; //0+1%3 1
    slideContainer.animate({ marginTop: -300 * nextIdx + "px" });
    currentIdx = nextIdx;
  }, 3000);
}

autoSlide();

let popupLink = $("#notice li:first");
let popup = $("#popup");
let popupCloseBtn = popup.find(".close");

popupLink.click(function (e) {
  e.preventDefault();
  popup.addClass("active");
});
popupCloseBtn.click(function () {
  popup.removeClass("active");
});

let tabMenu = $(".tabmenu li");
let tabContent = $(".tabcontent > div");

tabMenu.click(function (e) {
  e.preventDefault();
  tabMenu.removeClass("active");
  $(this).addClass("active");
  let target = $(this).find("a").attr("href");
  tabContent.removeClass("active");
  $(target).addClass("active");
});
