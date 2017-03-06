/**
 * Created by Administrator on 2016/12/9.
 */
$(function () {
    var flag = false;
    $('.prev').on('tap',function () {
        window.history.go(-1);
    });
    $('input').on('blur',function () {
        var useVal = $('input[type=text]').val();
        var passwdVal = $('input[type=password]').val();
        if(useVal!=''&&passwdVal!=''){
            $('.button').css('background-color','#EA5404');
            flag = true;
        }
    });
    $('.button').on('tap',function () {
        if(flag){
            sessionStorage.setItem("username", $('input[type=text]').val());
            location.href = "./../me/me_login.html";
        }
    });
    $('.registered').on('tap',function () {
        location.href = './register.html';
    });
    $('.forget').on('tap',function () {
        location.href = './forget.html';
    })
});