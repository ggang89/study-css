// let mainMenu =$('nav>ul>li');
let mainMenu =$('.main_menu');
let subMenu =$('.sub_menu');
// let subMenu=mainMenu.find('ul');
let header = $('header');

mainMenu.mouseover(function(){
  header.addClass('active');
subMenu.stop().slideDown();
}).mouseout(function(){
  header.removeClass('active');
subMenu.stop().slideUp();
});

// 슬라이드
let slideContainer = $('.container');
let slide = $('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide(){
  setInterval(function(){
    let nextIdx = (currentIdx+1)%slideCount;
    slideContainer.animate({marginLeft:-1200*nextIdx+'px'});
    currentIdx = nextIdx
  },3000)
}
autoSlide();