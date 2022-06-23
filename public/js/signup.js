
//메일선택시 input에 값넣기
function mailIn(value){
    var mailAdr = document.querySelector('.mail_adr');
    mailAdr.value = value;
}

var idBtn = document.querySelector('.idBtn');
var idCheck = 0; //나아아아중에 아이디 중복체크 확인용
idBtn.addEventListener('click',()=>{
    var newId = document.querySelector('.id').value; //아이디
    //이후에 true값에 db연결 후 대조
    if(true){
        //newId.value !== ? && newId.value.length == 4
        alert('사용 가능한 ID 입니다.');
        idCheck = 1;
    }else{
        alert('사용 불가능한 ID 입니다.');
    }

});

//주소검색( 서버 연결해야 정상작동;; )
function openZipSearch(){
    new daum.Postcode({
        oncomplete: function(data) {
           document.querySelector(".adr_fst").value = data.zonecode;
           document.querySelector(".adr_scd").value =  data.address;
           document.querySelector(".adr_thd").focus();
        }
    }).open();
}

//가입확인시 공란체크,비밀번호 상이 확인
var subBtn = document.querySelector('.signypSm');
subBtn.addEventListener('click',()=>{
    var newPsw = document.querySelector('.psw').value; //비번
    var newPswCh = document.querySelector('.pswCh').value; //비번확인
    var checking = document.querySelectorAll('.import');//필수입력란 체크
    var nullInput = 0;

    //*필수입력사항 공란 확인
    checking.forEach(function(el,idx){
        if(checking[idx].value == null || checking[idx].value == ''){
            nullInput = 1;
        }
    });
    if(nullInput == 1){
        alert('*필수입력 사항을 모두 입력해 주세요.');
    }else if(newPsw !== newPswCh){
        //비번체크
        document.querySelector('.pswCh').focus();
        document.querySelector('.checkPsw').innerHTML = '*비밀번호를 확인해 주세요';
    }else{
        alert('가입이 완료되었습니다.');
        location.href = 'index.html';
    }    
});

//비밀번호 상이할 때
document.querySelector('.pswCh').addEventListener('click',() =>{
    document.querySelector('.checkPsw').innerHTML = '';
    document.querySelector('.pswCh').value = '';
});