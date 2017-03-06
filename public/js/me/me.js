/**
 * Created by Administrator on 2016/12/12.
 */
$(function () {
    var session =  sessionStorage.getItem("username");
   // console.log(session);
    if(session !=null){
        location.href = './me_login.html';
    }
   $('#login').on('tap',function () {
       location.href = '../login/login_01.html';
   })
});
$('.navbar .li_01').on('tap',function () {
    location.href = '../indexPage/indexPage.html';
});
$('.navbar .li_02').on('tap',function () {
    location.href = '../reservation/reservation.html';
});
$('.navbar .li_04').on('tap',function () {
    location.href = '../message/un_message.html';
});