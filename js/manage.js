$(document).ready(main);

function main(){
    //左侧栏动态显示
    $('.myflight_subnav_wrapper').mouseover(function () {
        $(this).children('ul').stop(true,true).show('normal');
    });
    $('.myflight_subnav_wrapper').mouseleave(function () {

        $(this).children('ul').hide();
    });
    //右侧栏
    $('.manage_tab li').bind('click', function () {
        $(this).addClass('manage_tab_bright').siblings('li').removeClass('manage_tab_bright');
        if($(this).index()==0){
            $('.addFlight').hide();
            $('.manage_myflight_content ul').show();

        }
        else{
            $('.manage_myflight_content ul').hide();
            $('.addFlight').show('slow');
        }
    })
}