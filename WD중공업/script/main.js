let mainMenu = $(".mainmenu>li");

mainMenu
  .mouseover(function () {
    $(this).find("ul").stop().slideDown();
  })
  .mouseout(function () {
    $(this).find("ul").stop().slideUp();
  });

  // slide
  let slide = $('.slide');
  let container =$('.container');
  let slideCounter=slide.length;
  let currentIdx=0;

  slide.eq(currentIdx).fadeIn();

  setInterval(showNextSlide ,3000);

  function showNextSlide(){
    let nextIdx= (currentIdx+1)%slideCounter;
    slide.eq(currentIdx).fadeOut();
    slide.eq(nextIdx).fadeIn();
    currentIdx = nextIdx;
  }

  //tab
  let tabMenu = $('.tabmenu li' );
  let tabContent =$('.tabcontent > div');

  tabMenu.click(function(e){
    e.preventDefault;
    tabMenu.removeClass('active');
    $(this).addClass('active');
  
  let target = $(this).find('a').attr('href');
  tabContent.removeClass('active');
  $(target).addClass('active');
  
  })

  // popup
  let popupLink = $('#notice li:first');
  let popup = $('#popup');
  let closeBtn = $('.close');

  popupLink.click(function(e){
    e.preventDefault;
    popup.addClass('active');
  });

  closeBtn.click(function(e){
    e.preventDefault;
    popup.removeClass('active');
  });