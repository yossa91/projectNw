

var famSite = document.querySelector('.fsBtn');
var famSiteList = document.querySelector('.famSlideMenu');
var famSLHeight = famSiteList.scrollHeight;
famSite.addEventListener('click',function(){
    famSiteList.style.height = famSLHeight + 'px';
});

var famSlideDw = document.querySelectorAll('.famSlideMenu>li>a');
famSlideDw.forEach(function(el,idx){
    famSlideDw[idx].onclick = function(){
        famSiteList.style.height = 0;
    }
});
