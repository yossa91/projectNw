$(document).ready(function(){
  $(".side_submenu").hide();
  $(".side_list>a").click(function(){
    if($(this).hasClass("side_menu_on")){
      $(this).removeClass("side_menu_on")
    }else{
      $(this).addClass("side_menu_on")
      $(".side_list>a").not(this).removeClass("side_menu_on")
    }
    $(this).next().slideToggle(300);
    $(".side_list>a").not(this).next().slideUp(300);
    // return false;
  });
  $(".side_list>a").eq(0).trigger("click");

});
$(document).ready(function(){
  $(".side_submenu>li>a").click(function(){
    if($(this).hasClass("side_submenu_on")){
      $(this).removeClass("side_submenu_on")
    }else{
      $(this).addClass("side_submenu_on")
      $(".side_submenu>li>a").not(this).removeClass("side_submenu_on")
    }
  });
});