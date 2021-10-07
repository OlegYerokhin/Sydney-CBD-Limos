$(document).ready(function(){
  $('.slider').bxSlider({
    mode: 'horizontal',
    speed: 1000,
    slideMargin: 30,
    randomStart: false,
    infiniteLoop: true,
    hideControlOnEnd: false,
    easing: null,
    captions: true,
    responsive: true,
    preloadImages: 'all',
    touchEnabled: true,
    preventDefaultSwipeX: true,
    pager: false,
    controls: true,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 370,
    adaptiveHeight: true
  });
});
