/**
 * Created by Administrator on 2016/12/9.
 */
$(function () {
    var topSlide;
    //获取轮播每个元素
        var $slider = $('.slider_block');
    //获取轮播容器
        var $sliderCon = $('.slider_container');
    //获取所有的点
        var $point = $('.point_block');
    //获取屏幕宽度
        var wd = $(window).width();
    //获取轮播个数
        var lg = $slider.length;
    //计算容器宽度
        var allWd = wd * lg;
    //计算元素高度
        var height = wd * 0.85;
    //设置容器宽度
        $sliderCon.width(allWd);
    //设置元素宽高
        $slider.width(wd).height(height);
    /*底部导航栏*/
    var count = 0;
    $('.navbar .li_05').on('tap',function () {
        location.href = '../me/me.html';
    });
    $('.navbar .li_04').on('tap',function () {
        location.href = '../message/un_message.html';
    });
    $('.navbar .li_03').on('tap',function () {
        $('.more_send').addClass('active');
    });
    $('.more_send .send_need').on('tap',function () {
       location.href = '../send/send_need.html';
    });
    $('.more_send .send_home').on('tap',function () {
        location.href = '../send/send_home.html';
    });
    $('.more_send .close').on('tap',function () {
       $(this).parent().removeClass('active');
    });
    $('.navbar .li_02').on('tap',function () {
        location.href = '../reservation/reservation.html';
    });
    var slideTime = setInterval(swipe_left,2000);
    function swipe_left () {
        $point.removeClass('active').eq(++count).addClass('active');
        $('.slide_box').find('.slider_container').animate({'margin-left':-wd+'px'}, 500, function(){
            $('.slide_box').find('.slider_block').eq(0).appendTo($('.slider_container'));
            $('.slider_container').css('margin-left',0)
        });
        if(count > 3){
            count = 0;
            $point.eq(0).addClass('active');
        }
        //console.log(count);
    }
    $('.slide_box').on('swipeLeft',function () {
        $point.removeClass('active').eq(++count).addClass('active');
        $(this).find('.slider_container').animate({'margin-left':-wd+'px'}, 500, function(){
            $(this).find('.slider_block').eq(0).appendTo($('.slider_container'));
            $('.slider_container').css('margin-left',0);
        });
        if(count > 3){
            count = 0;
            $point.eq(0).addClass('active');
        }
        //console.log(count);
    });
    $('.slide_box').on('touchstart',function () {
        clearInterval(slideTime);
    });
    $('.slide_box').on('touchend',function () {
        slideTime = setInterval(swipe_left,3000);
    });
    $('.slide_box').on('swipeRight',function () {
        $point.removeClass('active').eq(--count).addClass('active');
        $(this).find('.slider_block').first().before($(this).find('.slider_block').eq(3));
        $('.slider_container').css('margin-left', -wd+'px');
        $(this).find('.slider_container').animate({'margin-left': 0},500);
        if(count < 0){
            count = 3;
            $point.eq(lg-1).addClass('active');
        }
        //console.log(count);
    });
    /*下拉定位*/
    $(window).scroll(function () {
        //clearInterval(topSlide);
        var scrollH = $('body').scrollTop();
        if(scrollH >= 45){
            $('.go_top').show();
            $('.bg').css('opacity',1).css('transition','0.5s');
            $('.search').addClass('change');
            if(scrollH >= height-80){
                $('.select').addClass('active');
            }else{
                $('.select').removeClass('active');
            }
        }else{
            $('.go_top').hide();
            $('.bg').css('opacity',0).css('transition','0.5s');
            $('.search').removeClass('change');
        }
    });
    $('.go_top').on('tap',function () {
        $('.select').removeClass('active');
            topSlide = setInterval(function () {
            var winTop = $(window).scrollTop();
            if(winTop == 0){
                clearInterval(topSlide);
            }
            $(window).scrollTop(winTop-10)
        },10)
    });
        var num1,num2;var winH = $(window).height();var marH = winH - 464;
        $('.select_box li').on('tap',function () {
            num1 = $(this).index();//获取第几个下拉标题
            //console.log(num1);
            $(window).scrollTop(height-80);
            //console.log(winH);
            /*遮罩层*/
            if(num1!=4){
                if($('.mark').hasClass('active')){
                    $('.mark').css('bottom',marH+'px').removeClass('active');
                }else{
                    $('.mark').css('bottom',marH+'px').addClass('active');
                }
            }

            var _this = $('.select_box li');

            if(num1!=4){
                if(_this.eq(num1).hasClass('active')){
                    $('.mark').css('bottom',marH+'px').removeClass('active');
                    // $('.select').css('margin-top',0).css('transition','0.3s');
                    $('.select .select_down').eq(num1).removeClass('height');
                    _this.eq(num1).removeClass('active');
                    if(num1!=3&&num1!=0&&num1!=4){
                        $('.select .select_down li').removeClass('active');
                    }
                }else{
                    if(num1!=4){
                        $('.mark').css('bottom',marH+'px').addClass('active');
                    }

                    _this.removeClass('active');
                    $('.select .select_down').removeClass('height');
                    _this.eq(num1).addClass('active');
                    $('.select .select_down li').removeClass('active');
                    $('.select .select_down').eq(num1).addClass('height');
                    $('.select_down').eq(3).find('.left .txt1').find('li').eq(0).addClass('active');
                    $('.select_down').eq(0).find('.left .txt1').find('li').eq(0).addClass('active');
                    $('.select_down').eq(3).find('.right .txt2').hide();
                    $('.select_down').eq(0).find('.right .txt2').hide();
                    $('.select_down').eq(3).find('.right .txt2').eq(0).show();
                    $('.select_down').eq(0).find('.right .txt2').eq(0).show();
                }
            }
        });
        $('.select .select_down li').on('tap',function () {
            if(num1!=3&&num1!=0){
                var _this = $('.select .select_down li');
                num2 = $(this).index();//获取每个下拉列表中的点击index
                _this.removeClass('active');
                $('.select .select_down').eq(num1).find('li').eq(num2).addClass('active');
                $('.select .select_down').eq(num1).removeClass('height');
                $('.select_box li').removeClass('active');
                $('.mark').removeClass('active');
            }
        });
        $('.select .select_down').find('.txt1').find('li').on('tap',function () {
            var num = $(this).index();//获取元素下标
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
            $('.select_down').eq(3).find('.right .txt2').hide();
            $('.select_down').eq(0).find('.right .txt2').hide();
            $('.select_down').eq(3).find('.right .txt2').eq(num).show();
            $('.select_down').eq(0).find('.right .txt2').eq(num).show();
        });
        $('.items .txt .icon').on('tap',function () {
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active');
            }
        });
        $('.select .select_down').find('.txt2').find('li').on('tap',function () {
            $('.select .select_down').removeClass('height');
            $('.select_box li').removeClass('active');
            $('.mark').removeClass('active');
        });
        $('.select_down li .txt_box').on('tap',function (e) {
            e.stopPropagation();
        });
});
