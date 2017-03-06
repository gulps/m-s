/**
 * Created by Administrator on 2016/12/13.
 */
$('.prev').on('tap',function () {
    location.href = './me_login.html';
});
var itemLgs = $('.home .items').length,i=0;
for(;i<itemLgs;i++){
    $('.home .items').eq(i).on({'swipeLeft':function () {
        $(this).css('margin-left','-86px').css('transition','0.2s');
    },'swipeRight':function () {
        $(this).css('margin-left','0').css('transition','0.2s');
    }})
};
var delLgs = $('.home .del').length,j=0;
for(;j<delLgs;j++){
    $('.home .del').eq(j).on('tap',function () {
        $(this).parent().hide();
    })
}