$(document).ready(function(){
  $('.slider').bxSlider({
    mode: 'horizontal',
    slideMargin: 30,
    randomStart: false,
    infiniteLoop: true,
    hideControlOnEnd: false,
    captions: false,
    adaptiveHeight: false,
    responsive: true,
    touchEnabled: true,
    preloadImages: 'all',
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    pager: false,
    controls: true,
    autoControls: false,
    auto: false,
    autoDirection: 'next',
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    
  });
});
