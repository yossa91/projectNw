var swiper = new Swiper(".historySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".icon_r",
    prevEl: ".icon_l",
  },
});


$(function(){ 
  $(".tour_modal").click(function(){
    $(".modal_his").fadeIn(300);
  });
  
  $(".modal_his").click(function(){
    $(".modal_his").fadeOut(300);
  });
});
