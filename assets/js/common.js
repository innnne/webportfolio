$(document).ready(function(){

    $('.gnb li').click(function(){
        $(this).addClass('on').siblings('li').removeClass('on');

       // alert($(this).children().text() );
        //$('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
});