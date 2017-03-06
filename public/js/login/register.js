/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
    var flag = false;
    $('.prev').on('tap',function () {
        window.history.go(-1);
    });
    $('input').on('blur',function () {
        var ipt1 = $('#ipt1').val(),ipt2 = $('#ipt2').val(),ipt3 = $('#ipt3').val(),
            ipt4 = $('#ipt4').val(),ipt5 = $('#ipt5').val();

        if(ipt1!=''&&ipt2!=''&&ipt3!=''&&ipt4!=''&&ipt5!=''){
            $('.button').css('background-color','#EA5404');
            flag = true;
        }
    });
    var t;
    $('.get').on('tap',function () {
       $(this).css('background-color','#B2B2B2').css('transition','0.5s');
       $(this).text(30);
       var _this = this;
        t = setInterval(function () {
            $(_this).text(parseInt($(_this).text())-1);
            if($(_this).text()<0){
                clearInterval(t);
                $(_this).css('background-color','#EA5404')
                $(_this).text(5);
            }
        },1000);
        $(this).off('tap');
        setTimeout(function () {
            $(_this).on('tap',function () {
                $(this).css('background-color','#B2B2B2').css('transition','0.5s');
                $(this).text(30);
                var _this = this;
                t = setInterval(function () {
                    $(_this).text(parseInt($(_this).text())-1);
                    if($(_this).text()<0){
                        clearInterval(t);
                        $(_this).css('background-color','#EA5404')
                        $(_this).text(5);
                    }
                },1000);
                $(this).off('tap');
            });
        },5000)
    });

    $('.button').on('tap',function () {
        if(flag){
            if($('#ipt5').val()=='经纪人'){
                location.href = './jjr.html'
            }
        }
    });
    $('#human').on('tap',function () {
       $('.select_human').css('opacity',1).css('transition','0.5s');
    });
    var lisLg = $('.select_human li').length;
    for(var i=0;i<lisLg;i++){
        $('.select_human li').eq(i).on('tap',function () {
            $('#ipt5').val($(this).text());
            $(this).parent().css('opacity',0).css('transition','0.5s');
            $('.select img').addClass('arrow_rotate');
        })
    }
    $('.registerDone .ok').on('tap',function () {
        location.href = './login_01.html';
    })
});
