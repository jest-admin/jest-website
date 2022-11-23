//express
//require dependencies
var express = require('express');
var bodyParser = require('body-parser');
//const favicon = require('express-favicon');
var app = express();
var port = process.env.PORT || 3000;

var router = require('./app/routes');
require('dotenv/config');
app.use('/',router);
//app.use(favicon(__dirname + '/../public/logo.png'));


//set static files (css,images,etc) location
app.use(express.static(__dirname + '/public'));


//start server
app.listen(port, function(){
    console.log('app started');
});

