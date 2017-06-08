var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var PORT = process.env.PORT || 20000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(PORT, function(){
 console.log("Express server on port 20000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));


var routes = require('./routes/all')(app, fs);


// ./routes/all.js 파일의 module.exports한 routing 정보가 router에 담김