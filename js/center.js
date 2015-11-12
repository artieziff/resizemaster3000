$(document).ready(function(){
    var margin = ($(window).height()-$('.center').height())/2;
    $('.center').css('marginTop',margin);
    var w = $('.num').width();
    $('p').css('width',w);
    $('hr').css('width',w);
});
$(window).resize(function(){
    var margin = ($(window).height()-$('.center').height())/2;
    $('.center').css('marginTop',margin);
    var w = $('.num').width();
    $('p').css('width',w);
    $('hr').css('width',w);
});