/**
 * Created by Administrator on 2016/12/12.
 */
$(function () {
   $('#change_pho').on('tap',function () {
       $('.mark').css('background','rgba(0,0,0,0.2)').css('display','block');
       $('.change_photo').css('bottom',0).css('transition','0.3s');
   });
   $('.change_photo .cancel').on('tap',function () {
       $('.mark').css('display','none');
       $('.change_photo').css('bottom','-124px').css('transition','0.3s');
   });
   $('.prev').on('tap',function () {
       window.history.go(-1);
   })
});