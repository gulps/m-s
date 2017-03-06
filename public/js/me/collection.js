/**
 * Created by Administrator on 2016/12/13.
 */
$('#select_01').tap(function () {
    $('.myHome').hide();
    $('.myNeed').show();
    $('#select_02').css('color','#333').css('border-color','transparent');
    $(this).css('color','#ea5404').css('border-bottom','1px solid #ea5404');
});
$('#select_02').tap(function () {
    $('.myNeed').hide();
    $('.myHome').show();
    $('#select_01').css('color','#333').css('border-color','transparent');
    $(this).css('color','#ea5404').css('border-bottom','1px solid #ea5404');
});
$('.prev').tap(function () {
   window.history.go(-1);
});