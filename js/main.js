$(document).ready(function(){
//S-登录页面内容

    //登录按钮操作
    $('.login').bind('click', function(){
        $('.register_form').css('display','none');
        $('.login_form').css('display','block');
        mask();
        loginPos();
        $('.login_title span').text("会员登录");
        $('#login').show('slow');
        loginToRegiter();
    });
    //注册按钮操作
    $('.register_btn').bind('click', function(){
        $('.login_form').css('display','none');
        $('.register_form').css('display','block')
        mask();
        loginPos();
        $('.login_title span').text("会员注册");
        $('#login').show('slow');
        loginToRegiter();
    })
    //关闭按钮操作
    $('.close_btn').bind('click', close);

    //-------------以下为该页的包装函数-------------------------------------------------
    //登录窗口定位
    function loginPos(){
        var visibWidth = $(window).width();      //可视区域宽度
        var visibHeight = $(window).height();      //可视区域宽度
        var loginWidth = $('#login').innerWidth()       //登陆页面宽度
        var loginHeight = $('#login').innerHeight()       //登陆页面高度

        $('#login').css('left',(visibWidth-loginWidth)/2);
        $('#login').css('top',(visibHeight-loginHeight)/2);
    }

    //创建遮罩层节点
    function mask(){
        var cWidth = document.documentElement.scrollWidth;
        var cHeight = document.documentElement.scrollHeight;
        var oMask = document.createElement('div');
        //扩展：Internet Explorer 8、7、6、5使用document.documentElement.clientHeight(clientWidth)获得页面高度或宽度

        oMask.className = "mask";
        oMask.style.height = cHeight +  'px';
        oMask.style.width = cWidth + 'px';
        document.body.appendChild(oMask);
    }

    //登录页面关闭
    function close(){
            $('#login').hide('slow');
            $('.mask').hide('slow');
    }

    //登陆页面与注册页面的转换
    function loginToRegiter(){
        $(".register").bind('click', function(){
            $(".login_form").hide('slow');
            $(".register_form").show('slow');
            $('.login_title span').text("会员注册");
            return false;
        });

        $(".ihavaaccount").click (function () {
            $(".register_form").hide('slow');
            $(".login_form").show('slow');
            $('.login_title span').text("会员登录");
            return false;
        });
    }

    function addLogin (that) {
        $(that).parents('body').append($('#login').clone());
    }

//E-登录页面内容
//S-主页内容
    $('.subnav_left ul li').bind('click',function(){
        $(this).addClass('subnav_left_bright').siblings().removeClass('subnav_left_bright');
        if($(this).index()==0)
        {
            $('.unfinish').stop();
            $('.unfinish').hide();
            $('.subnav_right_centent form').show();
        }
        else{
            $('.subnav_right_centent form').hide();
            $('.unfinish').show('slow');
        }
    })
//E-主页内容
//S-预定机票页内容
    $(".tbody_price").bind('click', function(){
        var btnIndex=0;     //飞机舱类型选择，0为头等舱，1为公务舱，2为经济舱

        $(".tbody_price").removeClass('price_click');
        $(this).addClass('price_click');        //添加标志，舱选定
        $(".tbody_book").css("display","none");     //在展示前将预定界面全部关闭
        $(this).parent('.tbody').next('.tbody_book').show('slow');   //展示点击所在价格栏的预定窗口
        //改变预定窗口的文档内容，使其价格及舱类型，与选定的价格栏相同
        $('.price_index').text($(this).children('.price_num').text());
        btnIndex=$(".tbody_price").index($(this))%3;       //因为价格按钮都用同一个类名，索引号超过三，而舱类型只有三个，所以取余后可以知道，其代表哪一个舱
        switch(btnIndex){
            case 0: $('.plane_index').text('头等舱');break;
            case 1: $('.plane_index').text('公务舱');break;
            case 2: $('.plane_index').text('经济舱');break;
        }
    });
    //奇偶序号价格栏的背景颜色不同
    $(".tbody:odd").addClass('odd');
    $(".tbody:even").addClass('even');

    //测试内容，可以删掉
    $('.book_btn').click(function() {
        window.location.href = "book_imformation.html"
    });
//E-预定机票页内容

//S-我的航班页内容
    //实现侧导航栏的动态展开效果
    // $('.myflight_subnav_wrapper').mouseover(function () {
    //     $(this).children('ul').stop(true,true).show('normal');
    // });
    // $('.myflight_subnav_wrapper').mouseleave(function () {

    //     $(this).children('ul').hide();
    // });
//E-我的航班页内容
})
