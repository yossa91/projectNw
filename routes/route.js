const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();

const { json } = require('express');
const {check, validationResult} = require('express-validator');
const db = require("../db");




//메인
router.use(expressLayouts);
router.get('/',(req ,res) => {
  res.render('main');
  });


//회원가입페이지
router.get('/nowon_signup', (req,res) => {
    res.render('nowon_signup');
});
//회원가입_프로세스
router.post('/signupdata',(req, res, next) =>{
  let errs = validationResult(req);
  console.log(errs);
    if(errs['errors'].length > 0){
      res.render('nowon_signup',{errs : errs['errors']});
    }else{
      let param = JSON.parse(JSON.stringify(req.body));
      var newId = param['newId']
      var newPsw = param['newPsw']
      var newName = param['newName']
      var number = param['number_fst'] + param['number_scd'] + param['number_thd'];
      var phone = param['phone_fst'] + param['phone_scd'] + param['phone_thd'];
      var mail = param['mail_fst'] + param['mail_scd'];
      var mailing = param['mailing']
      var sms = param['sms']
      var sms = param['sms']
      var adress = param['adr_post'] + param['adr_fst'] + param['adr_scd'];
      db.insertMember(newId,newPsw,newName,number,phone,mail,mailing,sms,adress, () => {
        res.render('nowon_login');
      });
    }
});

//로그인페이지
router.get('/nowon_login', (req,res) => {
  res.render('nowon_login');
});

router.post('/logindata',(req, res, next) =>{
  let errs = validationResult(req);
  console.log(errs);
    if(errs['errors'].length > 0){
      res.render('nowon_signup',{errs : errs['errors']});
    }else{
      let param = JSON.parse(JSON.stringify(req.body));
      var userId = param['userId']
      var userPsw = param['userPsw']
      db.login(userId,userPsw, (result) =>{
        if(result == true){
          console.log(`${userId}님이 로그인되었습니다.`);
          res.render('main');
        }else{
          console.log('로그인정보를 확인하세요');
          res.render('nowon_login');
        }
      });
    }
});



/*
//페이지메인
router.get('/', (req,res) => {
  db.getAllMemos((results) => {
    res.render('nowon_introConduct', { results : results });
  });
  //res.send('test');
});

//글검색
router.post('/search',(req, res) =>{
  let errs = validationResult(req);
  let param = JSON.parse(JSON.stringify(req.body));
  var seachbox = param['seachbox'];
  let searchText = param['searchText'];
    if(errs['errors'].length > 0){
    db.update_process(no, (row) => {
      res.render('/', {row : row[0], errs : errs['errors']} );
    });
  }else{
    db.search_process(seachbox, searchText, (rows) => {
      res.render('nowon_introConduct', { rows : rows });
    });
  }
});


//새글-------------------------
//파일관련 모듈
const multer = require('multer');
//파일 저장위치, 파일이름 생성
const storage = multer.diskStorage({
  destination : function (req, file, cb) {
    cb(null, './upload')
  },
  //파일이름설정
  filename: function (req, file, cb) {
    cb(null , Date.now() + '-' + file.originalname)
  }
});
 //파일 업로드 모듈
  const upload = multer({ storage: storage })

  //수정------------그냥 글 안올라감 ;;------------------------
router.get('/create',(req,res) => {
  res.render('create');  
});
router.post('/store', upload.single('upload'), [check('title').isByteLength({min:1 , max:100})],
  function(req,res, next){
    let errs = validationResult(req);
        console.log(errs);
    if(errs['errors'].length > 0){
      res.render('create',{errs : errs['errors']});
    }else{
      let param = JSON.parse(JSON.stringify(req.body));
      let title = param['title'];
      let description = param['description'];
      let upload = req.file.filename;
      db.insertMemo(title,description,upload, function(){
        console.log(upload);
        res.redirect('/');
      });
    }
  });


//글보기
  router.get('/page/:no', (req, res) => {
    //var no = req.url;
    var no = req.params.no;
    db.page(no, (result) => {
      res.render('page',{result});
    });
  });

//파일다운로드
router.get('/download/:upload', (req, res) => {
  const filename = req.params.upload;
  const file = __dirname + '/../upload/' + filename;
  res.download(file);
});


//글수정
router.get('/update/:no',(req, res) => {
  var no = req.params.no;
  db.update(no, (row) => {
    if(typeof no === 'undefined' || row.length <= 0){
      res.status(404).json({error : 'undefined memo'});
    }else{
      res.render('update',{row});
    }
  });
});

//글수정중
router.post('/update/:no', [check('title').isByteLength({min:1 , max:300})],(req, res) =>{
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    var no = req.params.no;
    let title = param['title'];
    let description = param['description'];
    if(errs['errors'].length > 0){
      db.update_process(no, (row) => {
        res.render('update', {row : row[0], errs : errs['errors']} );
      });
    }else{
      db.update_process(no, title, description, () => {
        res.redirect('/');
      });
    }
  });

//글삭제
  router.get('/delete/:no', (req, res) => {
    var no = req.params.no;
    db.delete(no, () => {
      res.redirect('/');
    });


  });

*/
module.exports = router;




