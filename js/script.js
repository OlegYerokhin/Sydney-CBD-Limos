$(function() {
    $('.menu-open').click(function() {
        $('.burger').toggleClass('active')
    })
})

$(function() {
    $('.menu-open').click(function(){
        $('.menu').toggleClass('show-menu');
        $('.menu').toggleClass('hide-menu');
        
    })
});