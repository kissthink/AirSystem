$(document).ready (function () {
    //添加信息填写框
    $('.addPassenger').bind('click', addPerson);
    //删除信息填写框
    $('.passenger_delete').bind('click', function () {
        $(this).parents('.passenger_wrapper').remove();
        return false;
    });

    function addPerson () {
        var copy = $('.passenger_wrapper').eq(0).clone(true);
        copy.find('input').value='';
        $('.passenger').append(copy);

            $('.passenger_delete').show().eq(0).hide();

    }
})