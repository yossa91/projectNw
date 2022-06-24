const express =require("express");
const { engine } = require("express/lib/application");
const app = express();
const port = 3000;
var expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');


const homes =require('./routes/route.js');
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
app.use('/', homes);

app.set('views', __dirname + "/views");//html파일을 위한 경로설정
app.set('view engine', 'ejs');
app.set('layout','layout');//폴더원하면 layout앞에 /해서 폴더생성
app.set('layout extractScripts',true);



// app.engine('html', require('ejs').renderFile);


app.use(express.static(path.join(__dirname, 'public')));//css img js파일 사용을 위한 경로 설정
//??어떻게 가능하지? html 파일 안에 링크경로 수정 없이 가능한 이유가 뭘까...


module.exports = app;











