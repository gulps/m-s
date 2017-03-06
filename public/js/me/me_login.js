/**
 * Created by Administrator on 2016/12/12.
 */
$(function () {
   $('.setting').on('tap',function () {
       location.href = './setting.html';
   });
   $('#changeMe').on('tap',function () {
      location.href = './meData.html';
   });
   $('#lis_01 .right').on('tap',function () {
       location.href = './me_need.html';
   });
    $('#lis_02 .right').on('tap',function () {
        location.href = './mySend.html';
    });
   $('#txt_01').on('tap',function () {
       location.href = './collection.html';
   });
    $('.navbar ul .li_01').on('tap',function () {
        location.href = '../indexPage/indexPage.html';
    });
    $('.navbar ul .li_02').on('tap',function () {
        location.href = '../reservation/reservation.html';
    });
   $('.navbar ul .li_04').on('tap',function () {
       location.href = '../message/message.html';
   });
});