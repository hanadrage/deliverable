var express = require('express');
var app = express();


app.get('/', function(req, res){
	res.sendFile(__dirname+'/html/index.html')
});

app.get('/about', function(req, res){
	res.sendFile(__dirname+'/html/about.html')
});

app.get('/blog', function(req, res){
	res.sendFile(__dirname+'/html/blog-directory.html');
});

app.listen(8000, function(){
	console.log('HELLO!');
});
