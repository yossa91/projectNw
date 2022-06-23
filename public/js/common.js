

var famSite = document.querySelector('.familySite>a');
var famSiteList = document.querySelector('.famSlideMenu');
var famSLHeight = famSiteList.scrollHeight;
famSite.addEventListener('click',function(){
    famSiteList.style.height = famSLHeight + 'px';
});
document.body.onclick = function(){
    if(famSiteList.clientHeight >  0){
        famSiteList.style.height = 0;
    }else{
        return false;
    }
}
var famSlideDw = document.querySelectorAll('.famSlideMenu>li>a');
famSlideDw.forEach(function(el,idx){
    famSlideDw[idx].onclick = function(){
        famSiteList.style.height = 0;
    }
});
