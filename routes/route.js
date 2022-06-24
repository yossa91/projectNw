const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();

const { json } = require('express');
const {check, validationResult} = require('express-validator');
const db = require("../db");


router.use(expressLayouts);

router.get('/',(req ,res) => {
  res.render('main');
  //메인페이지 지정
  });
//로그인
router.get('/nowon_login_id',(req ,res) => {
  res.render("nowon_login_id");
});
router.get('/nowon_login_psw',(req ,res) => {
  res.render("nowon_login_psw");
});
router.get('/nowon_login',(req ,res) => {
  res.render("nowon_login");
});
router.get('/nowon_signup',(req ,res) => {
  res.render("nowon_signup");
});
//문화원 소개
router.get('/nowon_introText',(req ,res) => {
  res.render("nowon_introText");
});
router.get('/nowon_introIntro',(req ,res) => {
  res.render("nowon_introIntro");
});
router.get('/nowon_introBOD',(req ,res) => {
  res.render("nowon_introBOD");
});
router.get('/nowon_introFacility',(req ,res) => {
  res.render("nowon_introFacility");
});
router.get('/nowon_introHistory',(req ,res) => {
  res.render("nowon_introHistory");
});
router.get('/nowon_introMap',(req ,res) => {
  res.render("nowon_introMap");
});
router.get('/nowon_introOrganiz',(req ,res) => {
  res.render("nowon_introOrganiz");
});

//문화 행사 /대관
router.get('/event_culture',(req ,res) => {
  res.render("event_culture");
});

//문화강좌
router.get('/class',(req ,res) => {
  res.render("class");
});
router.get('/class_guide',(req ,res) => {
  res.render("class_guide");
});
router.get('/class_info',(req ,res) => {
  res.render("class_info");
});

//참여마당
router.get('/notice',(req ,res) => {
  res.render("notice");
});
router.get('/noti_607',(req ,res) => {
  res.render("noti_607");
});
router.get('/noti_608',(req ,res) => {
  res.render("noti_608");
});
router.get('/event',(req ,res) => {
  res.render("event");
});
router.get('/event_4',(req ,res) => {
  res.render("event_4");
});
router.get('/pressrelease',(req ,res) => {
  res.render("pressrelease");
});

//노원아카이브
router.get('/vision',(req ,res) => {
  res.render("vision");
});
router.get('/nongyo',(req ,res) => {
  res.render("nongyo");
});
router.get('/history_Wolgye',(req ,res) => {
  res.render("history_Wolgye");
});
router.get('/history_Sanggye',(req ,res) => {
  res.render("history_Sanggye");
});
router.get('/history_nowon',(req ,res) => {
  res.render("history_nowon");
});
//---------------새창으로 띄우기 수정----------------
router.get('/history_info',(req ,res) => {
  res.render("history_info");
});



//게시판
router.get('/nowon_introConduct', (req,res) => {
  db.getAllMemos((rows) => {
    res.render('nowon_introConduct', { rows : rows });
  });
  //res.send('test');
});

//글검색
router.post('/search',/* [check('title').isByteLength({min:1 , max:300})],*/(req, res) =>{
  let errs = validationResult(req);
  let param = JSON.parse(JSON.stringify(req.body));
  var seachbox = param['seachbox'];
  let searchText = param['searchText'];
    if(errs['errors'].length > 0){
    db.update_process(no, (row) => {
      res.render('/nowon_introConduct', {row : row[0], errs : errs['errors']} );
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
const fileFilter = (req, file, cb) => {
  if(file == undefined || file == null){
    cb(null, true);
  }
}

//파일 업로드 모듈
const upload = multer({ storage: storage, fileFilter: fileFilter }).single('upload')

router.post('/store', [check('title').isByteLength({min:1 , max:100})], function(req,res, cb){
  upload(req, res, err => {
      if (err) {
      return res.json({ success: false, err })
      }
      else{
        let param = JSON.parse(JSON.stringify(req.body));
        let title = param['title'];
        let description = param['description'];
        let upload = req.file?.originalname;
        if(upload == undefined){
          upload = '';
          db.insertMemo(title,description,upload, function(){
            res.redirect('/');
          });
        }else{
          db.insertMemo(title,description,upload, function(){
            res.redirect('/');
          });
       }
      }
    });
  });


//글보기
  router.get('/page/:no', (req, res) => {
    //var no = req.url;
    var no = req.params.no;
    db.page(no, (result) => {
      res.render('nowon_iC_page',{result});
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
      res.render('nowon_iC_update',{row});
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
        res.render('nowon_iC_update', {row : row[0], errs : errs['errors']} );
      });
    }else{
      db.update_process(no, title, description, () => {
        res.redirect('/nowon_introConduct');
      });
    }
  });

//글삭제
  router.get('/delete/:no', (req, res) => {
    var no = req.params.no;
    db.delete(no, () => {
      res.redirect('/nowon_introConduct');
    });


  });
module.exports = router;
