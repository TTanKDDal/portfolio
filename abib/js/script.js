$(function(){
    $('.btn-wrap').mouseenter(function(){
        $(this).children('.nav-bar').stop().slideDown(300);
    }).mouseleave(function(){
        $(this).children('.nav-bar').stop().slideUp(300);
    });

});