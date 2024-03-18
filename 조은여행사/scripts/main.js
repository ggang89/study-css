let mainMenu =$('.mainmenu > li');


mainMenu.mouseover(function(){
 $(this).find('ul').stop().slideDown();
}).mouseout(function(){
  $(this).find('ul').stop().slideUp();
});

//slide
let slide = $('.slide');
let slideContainer = $('.container');
let slideCount =slide.length;
let currentIdx = 0;


function autoSlide(){
setInterval(function(){
  let nextIdx =(currentIdx+1) % slideCount;
  slideContainer.animate({
    marginTop:-300*nextIdx+'px'
  });
  currentIdx = nextIdx;
},3000)
}
autoSlide();


//
let tabMenu = $('.tabmenu li');
let tabContent = $('.tabcontent > div');
tabMenu.click(function (e) {
  e.preventDefault();
  tabMenu.removeClass('active');
  $(this).addClass('active');
  let target = $(this).find('a').attr('href');
  tabContent.removeClass('active');
  $(target).addClass('active');
});

//popup
let popupLink=$('#notice li:first');
let popup = $('.popup');
closeBtn =$('.close');

popupLink.click(function(e){
  e.preventDefault;
  popup.addClass('active');
});
closeBtn.click(function(){
  popup.removeClass('active')
});