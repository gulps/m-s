/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
    $('.title .prev').on('tap',function () {
        window.history.go(-1);
    });
    $('.title .next').on('tap',function () {
        $('.mark').show();
        $('.alert_01').show();
    });
    $('.alert_01 .bottom .cancel').on('tap',function () {
        $('.mark').hide();
        $('.alert_01').hide();
    });
    $('.alert_01 .ok').on('tap',function () {
        $('.alert_01').hide();
        $('.alert_02').show();
    });
    $('.alert_02 .bottom').on('tap',function () {
        $('.alert_02').hide();
        $('.alert_03').show();
    });
    $('.alert_03 .bottom').on('tap',function () {
        var iptVal = $('.items_05 input').val();
        $('.mark').hide();
        $('.alert_03').hide();
        $('.items_03').find('span').text(iptVal);
    })
});