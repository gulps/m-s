/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
   $('.title .prev').on('tap',function () {
        window.history.go(-1);
   });
   $('.check_box').on('tap',function () {
       if($(this).hasClass('active')){
           $(this).removeClass('active');
       }else{
           $(this).addClass('active');
       };
       if($('.check_box').eq(2).hasClass('active')){
           $('textarea').removeAttr('disabled');
       }else{
           $('textarea').attr('disabled','disabled');
       }
   })
});