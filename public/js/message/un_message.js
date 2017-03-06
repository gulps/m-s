/**
 * Created by Administrator on 2016/12/14.
 */
/**
 * Created by Administrator on 2016/12/13.
 */

$(function () {
    var session =  sessionStorage.getItem("username");
// console.log(session);
    if(session !=null){
        location.href = './message.html';
    }
    $('.top .title .lis:eq(0)').on('tap',function () {
        $(this).css('background-color','#EA5404').css('color','#FFF');
        $('.top .title .lis:eq(1)').css('background-color','#FFF').css('color','#EA5404');
        $('.top .title .lis:eq(2)').css('background-color','#FFF').css('color','#EA5404');
    });
    $('.top .title .lis:eq(1)').on('tap',function () {
        $(this).css('background-color','#EA5404').css('color','#FFF');
        $('.top .title .lis:eq(0)').css('background-color','#FFF').css('color','#EA5404');
        $('.top .title .lis:eq(2)').css('background-color','#FFF').css('color','#EA5404');
    });
    $('.top .title .lis:eq(2)').on('tap',function () {
        $(this).css('background-color','#EA5404').css('color','#FFF');
        $('.top .title .lis:eq(0)').css('background-color','#FFF').css('color','#EA5404');
        $('.top .title .lis:eq(1)').css('background-color','#FFF').css('color','#EA5404');
    });
    $('.navbar .li_01').on('tap',function () {
        location.href = '../indexPage/indexPage.html';
    });
    $('.navbar .li_02').on('tap',function () {
        location.href = '../reservation/reservation.html';
    });
    $('.navbar .li_05').on('tap',function () {
        location.href = '../me/me_login.html';
    });
    $('.navbar .lis_05').on('tap',function () {
        location.href = '../me/me.html';
    });
});