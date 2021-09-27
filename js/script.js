$(function() {
    $('.menu-open').click(function(){
        $('.menu').toggleClass('show-menu');

    })
});

$('.menu-open').click(function () {
    $(".burger-open").css({display: "inline-block"});
}, function () {
    $(".burger-open").css({display: "none"});
});

$('.menu-open').click(function () {
    $(".burger-close").css({display: "none"});
}, function () {
    $(".burger-close").css({display: "inline-block"});
});

