$(document).ready(function () {
    $('.myflight_subnav_wrapper').mouseover(function () {
        $(this).children('ul').stop(true,true).show('normal');
    });
    $('.myflight_subnav_wrapper').mouseleave(function () {

        $(this).children('ul').hide();
    });
})