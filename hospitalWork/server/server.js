var express = require('express');
var app = express();
var urllib=require('url');
var fs=require('fs');


app.get('/reportInfo', function (req, res) {
	var jsonData=JSON.parse(fs.readFileSync( "./data/info.json"));
	var jsonParam = JSON.stringify(jsonData.reportInfo);
	var params = urllib.parse(req.url, true);
	  if (params.query && params.query.callback) {
	    var str =  params.query.callback + '(' + jsonParam + ')';//jsonp
	    res.end(str);
	  } else {
	    res.end(jsonParam);//普通的json
	  }  
});

app.get('/test', function (req, res) {
	var jsonData=JSON.parse(fs.readFileSync( "./data/test.json"));
	var jsonParam = JSON.stringify(jsonData.test);
	var params = urllib.parse(req.url, true);
	  if (params.query && params.query.callback) {
	    var str =  params.query.callback + '(' + jsonParam + ')';//jsonp
	    res.end(str);
	  } else {
	    res.end(jsonParam);//普通的json

	  }  
});

app.get('/test2', function(req, res) {
	var jsonData=JSON.parse(fs.readFileSync( "./test2.json"));
	res.send(JSON.stringify(jsonData.test));
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/postlogin', function(req, res) {
	var pathname = urllib.parse(req.url).pathname;
    console.log(pathname);

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end("success")
});




app.listen(3000, function (req, res) {
  console.log('Hello World is listening at port 3000');
  console.log(req);
});