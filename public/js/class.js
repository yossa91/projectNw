$(function(){ 
    $(".class_enroll>button").click(function(){
      $(".modal").fadeIn(300);
    });
    
    $(".modal_btn_wrap>.btnL").click(function(){
      $(".modal").fadeOut(300);
    });
  });