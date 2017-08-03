$(document).ready (main);

function main () {
//S-预定流程——完成付款页面
    var second = 5;
    var timer = null;
    // caculate();
    timer=setInterval(play,1000);
    function play() {
        second--;
        $('#turn_time').text(second);
        if(second == 0)
        {
            $('.backHome').click();
            clearTimeout(timer);
            window.location.href = 'index.htm';
            }
    }
//E-预定流程——完成付款页面
}