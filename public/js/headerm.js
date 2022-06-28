$(document).ready(function(){
    mobile_menu();
});

function mobile_menu(){
    /* 변수 선언 */
    var $menu = null;
    var $left_gnb = null; // 영역 전체
    var $depth1_wrap = null;
    var $depth1 = null;
    var $depth1_btn = null;
    
    /* 시작 함수 */
    function start(){
        init();
        init_event();
    }
    /* 변수 초기화 함수 */
    function init(){
        $menu = $('.menuMobi');
        $left_gnb = $('.mobi_gnbWrap'); // 영역 전체
        $depth1_wrap = $('.mobi_gnb>li');
        $depth1 = $depth1_wrap.children('ul');
        $depth1_btn = $depth1_wrap.children('a');
    }
    /* 이벤트 함수 */
    function init_event(){
        
        /* 모바일 메뉴 버튼 클릭했을때 모바일 메뉴영역 나오게 하기 */
        $menu.click(function(event){
            event.preventDefault();
            $left_gnb.addClass('on');
        });
        
        /* x버튼 눌렀을때 모바일 메뉴 닫기 */
        $('.closeBtn').click(function(event){
            event.preventDefault();

            $left_gnb.removeClass('on');
            
            // x버튼 누르면 시간차 약간두고 소메뉴 닫히게 하기
            setTimeout(function(){
                $depth1_btn.removeClass('on');
                $depth1.slideUp();
            },300)
        });
        
        /* depth1의 각메뉴 클릭시 depth2 나오게 하기 */
        $depth1_btn.click(function(event){
            event.preventDefault();
            var $this = $(this);
            var $this_ul = $this.siblings('ul');

            var check = $this.hasClass('on');
            if(check){
                $this.removeClass('on');
                $this_ul.stop(true,true).slideUp();
            }else{
                $depth1_btn.removeClass('on');
                $depth1.stop().slideUp();
                $this.addClass('on');
                $this_ul.stop(true,true).slideDown();
            }
        });
        
        /* 디바이스 크기 변경시 모바일 메뉴영역 숨기기 */
        $(window).resize(function(){
            $left_gnb.removeClass('on');
        });
    }
    
    start(); // 시작 호출
}

$(document).ready(function(){
    $(".mobi_gnb>li>a").click(function(){
      if($(this).hasClass("activeMobi")){
        $(this).removeClass("activeMobi")
      }else{
        $(this).addClass("activeMobi")
        $(".mobi_gnb>li>a").not(this).removeClass("activeMobi")
      }
    });
  });