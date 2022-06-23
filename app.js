var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var routers = require('./routes/route');

app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(expressLayouts);
app.use(cookieParser());
app.use(logger('dev'));



app.use('/', routers);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.set('layout','layout');
app.set('layout extractScripts',true);


app.use(express.static(path.join(__dirname,'public')));
module.exports = app;

