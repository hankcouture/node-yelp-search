var http = require("http");
var express = require('express');
var fs = require('fs');
var yelp = require('./yelp.js');

var port = 3000;
var ip = "127.0.0.1";
console.log("Listening on http://" + ip + ":" + port);


// Using Express.js
var app = express();

app.use(express.static('../public'));

app.post('/', function(req, res) {
	res.setHeader('Content-Type', "application/json");
	req.on('data', function (data) {
        dataParsed = JSON.parse(data);
        console.log(dataParsed);
        yelp.search(dataParsed.term, dataParsed.location, function(data){
			res.end(JSON.stringify(data));
        });
    });
})

app.listen(port, ip);