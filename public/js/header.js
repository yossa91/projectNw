
$('.gnb > li').mouseenter(function(){
    let menu_i = $(this).index();
    
    if(menu_i < 6) { 

        $('.menu_pan').css({ //모두 display:none 시킨 후 
            display:'none'
        }).eq($(this).index()).css({ // 해당 인덱스 넘버만 보여질 수 있도록 한다.
          display:'block'
      })
    }
});
$('.gnb > li').mouseleave(function(){
    let menu_i = $(this).index();

    if(menu_i < 6) {

        $('.menu_pan').eq($(this).index()).css({
          display:'none'
      })
    }
})

//menu_sub_pan : 100% 부분
$('.menu_pan').mouseenter(function(){
    $('.menu_pan').eq($(this).index()).css({
      display:'block'
  })
})
$('.menu_pan').mouseleave(function(){
    $('.menu_pan').eq($(this).index()).css({
      display:'none'
  })
})
$('.hoverBar').mouseenter(function(){
    $('.menu_pan').eq($(this).index()).css({
      display:'block'
  })
})
$('.hoverBar').mouseleave(function(){
    $('.menu_pan').eq($(this).index()).css({
      display:'none'
  })
})

//메뉴 하단 hover bar
function MenuHoverBoder(){
    var $this = $(this);
    var $activeThis = $('.gnb > li.active');
    var $menuWidth = $activeThis.width();
    var $menuPosition = $activeThis.position();
    var $border = $this.parent().parent().find(' > span');
    
    if ($('.gnb > li').hasClass('active')) {
      $border.css('width', $menuWidth);
      $border.css('left', $menuPosition.left);
    }
  };

$('.gnb > li').mouseenter(function(){

  $(this).addClass('active');
})

$('.gnb > li').mouseleave(function(){
    $(this).removeClass('active');
    $('.hoverBar').css('width','');
    $('.hoverBar').css('left','');
  })

  $(".gnb > li").mouseenter(MenuHoverBoder);


//메뉴판
$('.menu_pan').mouseenter(function(){
  $('.gnb > li').eq($(this).index()).addClass('active');
})

$('.menu_pan').mouseenter(MenuHoverBoder);

$('.menu_pan').mouseleave(function(){
  $('.gnb > li').eq($(this).index()).removeClass('active');
  $('.hoverBar').css('width','');
  $('.hoverBar').css('left','');
})
  


  