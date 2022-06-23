var swiper = new Swiper('.tab01', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: { //반응형 조건 속성
      720: { //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 25,
      }},
    navigation: {
      nextEl: '.right_arrow',
      prevEl: '.left_arrow',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
var swiper = new Swiper('.tab02', {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: { //반응형 조건 속성
      720: { //640 이상일 경우
        slidesPerView: 2, //레이아웃 2열
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 25,
      }},
    navigation: {
      nextEl: '.right_arrow',
      prevEl: '.left_arrow',
    },
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
var swiper = new Swiper('.tab04', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: { //반응형 조건 속성
    720: { //640 이상일 경우
      slidesPerView: 2, //레이아웃 2열
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25,
    }},
  navigation: {
    nextEl: '.right_arrow',
    prevEl: '.left_arrow',
  },
  observer: true,
  observeParents: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});

var swiper = new Swiper('.tab05', {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: { //반응형 조건 속성
    720: { //640 이상일 경우
      slidesPerView: 2, //레이아웃 2열
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 25,
    }},
  navigation: {
    nextEl: '.right_arrow',
    prevEl: '.left_arrow',
  },
  observer: true,
  observeParents: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});
  
/* -------------------
 * 서브 탭 클릭
 * ----------------- */
$(function(){ // jQuery 준비
  $('.sec2_cont>ul.event_tab > li').eq(0).addClass('active');
  $('.event_cont').hide(); 
  $('.event_cont').eq(0).show(); 
  $('ul.event_tab > li').click(function(){ 
      $('ul.event_tab > li').removeClass('active');
      $(this).addClass('active');
      $('.event_cont').hide();
      $('.event_cont').eq($(this).index()).show(); 
      touchSlide.reload(); //탭버튼 누를때마다 슬라이드 함수 다시 호출        
      return false;
      
  });
}); //jQuery 종료