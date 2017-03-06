/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
   $('.title .prev').on('tap',function () {
       window.history.go(-1);
   });
   $('.footer .footer_txt').eq(0).on('tap',function () {
       location.href = './get_changeDate.html';
   });
    $('.footer .footer_txt').eq(1).on('tap',function () {
        location.href = './get_success.html';
    });
    $('.footer .footer_txt').eq(2).on('tap',function () {
        location.href = './get_cancel.html';
    });
    $('.tel').on('tap',function () {
        $('.mark').show();
        $('.call_tel').show();
    });
    $('.call_tel').find('.cancel').on('tap',function () {
        $('.mark').hide();
        $('.call_tel').hide();
    });
});