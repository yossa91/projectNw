var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
const http = require('https');
const cron = require('node-cron');

//헤로쿠 아침 8시부터 11시까지
cron.schedule('*/20 23,0-14 * * *',function(){
    http.get('https://nw5jo.herokuapp.com/');
});



var homes = require('./routes/route.js');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(expressLayouts);
app.use(cookieParser());
app.use(logger('dev'));
app.use('/upload', express.static('upload'));

app.use('/',homes);  //미들웨어 등록

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.set('layout','layout');
app.set('layout extractScripts',true);


app.use(express.static(path.join(__dirname,'public')));

module.exports = app;