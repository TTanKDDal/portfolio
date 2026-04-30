$(function(){
    $('.btn-wrap').mouseenter(function(){
        $(this).children('.nav-bar').stop().slideDown();
    }).mouseleave(function(){
        $(this).children('.nav-bar').stop().slideUp();
    });

});