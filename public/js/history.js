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


// function openPopup(){
//   window.open('history_info.html','','resizable=no, left=50%, top=50%, width=500, location=no, height=300')
//   // if(newPop == null){
//   //     alert('팝업이 차단되었습니다')
//   // }
// }


function openPopup(){
  var url = "history_info.ejs";
  var name = "popup test";
  var popupX = (document.body.offsetWidth / 2) - (700 / 2);
  var popupY= (window.screen.height / 2) - (800 / 2);
  // var option = "width = 700, height = 800,left='+ popupX + ', top='+ popupY ,resizable=no,location=no,toolbar=no";
  window.open(url,'','status=no, width = 700, height = 800, left='+ popupX + ', top='+ popupY,);


}
