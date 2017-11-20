$(function(){
    var i = 0;
    $('.honor_main_main li').eq(0).fadeIn();
    $('.building_first ul li').eq(i).fadeIn();
    $('.building_both ul li').eq(i).fadeIn();
    $('.building_both .prev_button').click(function(){
        $('.building_both ul li').eq(i).fadeOut();
        if(i == 0){
            i = $('.building_both li').length -1;
        }else{
            i = i - 1;
        }

        $('.building_both ul li').eq(i).fadeIn();
    })
    $('.building_both .next_button').click(function(){
        $('.building_both ul li').eq(i).fadeOut();
        if(i == $('.building_both li').length -1){
            i = 0;
        }else{
            i = i + 1;
        }

        $('.building_both ul li').eq(i).fadeIn();
    })
    $('.building_first .prev_button').click(function(){
        $('.building_first ul li').eq(i).fadeOut();
        if(i == 0){
            i = $('.building_first li').length -1;
        }else{
            i = i - 1;
        }

        $('.building_first ul li').eq(i).fadeIn();
    })
    $('.building_first .next_button').click(function(){
        $('.building_first ul li').eq(i).fadeOut();
        if(i == $('.building_first li').length -1){
            i = 0;
        }else{
            i = i + 1;
        }

        $('.building_first ul li').eq(i).fadeIn();
    })
});
 $('.honor_main_list li').click(function(){
     $('.honor_main_main li').css('display','none');
     var a = $(this).index();
     $('.honor_main_main li').eq(a).fadeIn();
 });
var html = document.documentElement;

// 封装一个函数
function fontS(){
    // 获取 html 的宽
    var hW = html.offsetWidth;
    // 计算字体大小，这里是 html 宽的五十分之一
    var hS = hW / 140;
    // 给刚开始时的 html 设置字体大小
    html.style.fontSize = hS + "px";
}
// 当窗口大小改变时执行函数
fontS();
window.onresize = function(){
    location.reload();
    fontS();
}
var swiper = new Swiper('.swiper-container', {
    setWrapperSize :true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$(window).scroll(function() {
    var x = document.body.clientHeight;
    var top = $(document).scrollTop();
    var html  = $(window).height();
    if(top > html*1){
        $('.top_meau').css('position','fixed');
        $('.top_meau').css('top','0px');
        $('.top_meau').css('left','5%');
        if(top > html*1 && top< html*2.25){
            $('.top_meau ul li').removeClass('active');
            $('.top_meau ul li').eq(1).addClass('active');
        }else if(top > html*2.25 && top < html*5.23){
            $('.top_meau ul li').removeClass('active');
            $('.top_meau ul li').eq(2).addClass('active');
        }else if(top > html*5.23 && top<html*6.05){
            $('.top_meau ul li').removeClass('active');
            $('.top_meau ul li').eq(3).addClass('active');
        }else if(top>html*6.05 && top < html*6.18){
            $('.top_meau ul li').removeClass('active');
            $('.top_meau ul li').eq(4).addClass('active');
        }else if( top > html*6.18){
            $('.top_meau ul li').removeClass('active');
            $('.top_meau ul li').eq(5).addClass('active');
        }else{
            $('.top_meau ul li').removeClass('active');
            $('.top_meau ul li').eq(0).addClass('active');
        }
    }else{
        $('.top_meau').css('position','relative');
        $('.top_meau').css('top','');
        $('.top_meau').css('left','');
    }
});
$('.honor_main_list li').click(function(){
    $('.honor_main_list li').css('border','1px solid #EBEBEB');
    $(this).css('border','1px solid #D0C6B7');
})
$('.go_top_pic').click(function(){
    $("html,body").animate({scrollTop:0},1000);
})
$(function(){
    //FF下用JS实现自定义滚动条
    $(".honor_main_list").niceScroll({cursorborder:"",cursorcolor:"rgba(0,0,0,0)",boxzoom:true});
})