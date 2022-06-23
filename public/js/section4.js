
var slideBtnL = document.querySelector('.weptt_left');
var slideBtnR = document.querySelector('.weptt_right');
var num = null;

slideBtnR.addEventListener('click',function(){
    var box = document.querySelector('.weptt_box>div');
    var boxWhare = box.scrollWidth;
    var boxEl = document.querySelector('.slideWidth');
    var boxElwWidth = boxEl.clientWidth+10;
    var boxMove = boxElwWidth + num;
    if(boxMove < boxWhare - boxElwWidth ){    
        box.style.left = - boxMove + 'px';
        num = boxMove;
    }else{
        return false;
    }
});
slideBtnL.addEventListener('click',function(){
    var box = document.querySelector('.weptt_box>div');
    var boxEl = document.querySelector('.slideWidth');
    var boxElwWidth = boxEl.clientWidth+10;
    var boxMove = num - boxElwWidth;
    if(num > 0){
        box.style.left = - boxMove + 'px';
        num = boxMove;
    }else{
        return false;
    }
});