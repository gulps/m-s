/**
 * Created by Administrator on 2016/12/16.
 */
var itemLgs = $('.items').length,i=0;
for(;i<itemLgs;i++){
    $('.items').eq(i).on({'swipeLeft':function () {
        $('.items').css('margin-left',0).css('transition','0.5s');
        $(this).css('margin-left','-86px').css('transition','0.5s');
    },'swipeRight':function () {
        $(this).css('margin-left','0').css('transition','0.5s');
    }})
};
var delLgs = $('.del').length,j=0;
for(;j<delLgs;j++){
    $('.del').eq(j).on('tap',function () {
        $(this).parent().hide();
    })
}
$('.navbar .li_01').on('tap',function () {
    location.href = '../indexPage/indexPage.html';
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
$('.navbar .li_04').on('tap',function () {
    location.href = '../message/un_message.html';
});
$('.navbar .li_05').on('tap',function () {
    location.href = '../me/me.html';
});
$('.items').on('tap',function () {
    location.href = './get.html';
});
$('.items').find('.get').on('tap',function (e) {
    e.stopPropagation();
    $(this).hide();
    $(this).parent().parent().find('.get_in').show();
});