/**
 * Created by Administrator on 2016/12/13.
 */
$(function () {
    $('.top .title .lis:eq(0)').on('tap',function () {
        $('.message').show();
        $('.notice').hide();
        $('.need').hide();
        $(this).css('background-color','#EA5404').css('color','#FFF');
        $('.top .title .lis:eq(1)').css('background-color','#FFF').css('color','#EA5404');
        $('.top .title .lis:eq(2)').css('background-color','#FFF').css('color','#EA5404');
    });
    $('.top .title .lis:eq(1)').on('tap',function () {
        $('.message').hide();
        $('.notice').show();
        $('.need').hide();
        $(this).css('background-color','#EA5404').css('color','#FFF');
        $('.top .title .lis:eq(0)').css('background-color','#FFF').css('color','#EA5404');
        $('.top .title .lis:eq(2)').css('background-color','#FFF').css('color','#EA5404');
    });
    $('.top .title .lis:eq(2)').on('tap',function () {
        $('.message').hide();
        $('.notice').hide();
        $('.need').show();
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
    $('.navbar .li_05').on('tap',function () {
        location.href = '../me/me.html';
    });
});