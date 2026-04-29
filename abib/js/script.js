$(function(){
    $('.btn-wrap').mouseover(function(){
        $(this).find('.nav-bar').slideDown();
    }).mouseleave(function(){
        $('.nav-bar').slideUp();
    });

});