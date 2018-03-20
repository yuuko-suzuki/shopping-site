$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(function(){
    $('.sp_navi_btn').on('click',function(){
        $('this').toggleClass('active');
        $(".sp_navi_li").fadeToggle();
         return false;
    });
});

$(window).load(function(){
  $(".list-img img").click(function(){
    var img_src = $(this).attr("src");
    $(".dis-img img").attr("src", img_src);
  });
});