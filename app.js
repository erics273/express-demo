var express = require('express');
var port = process.env.PORT || 3000;
var app = express()
var AWSXRay = require('aws-xray-sdk');

app.use(AWSXRay.express.openSegment('MyApp'));

path = require('path'),
publicDir = path.join(__dirname,'public');

app.use(express.static(publicDir))

app.use(AWSXRay.express.closeSegment());

app.listen(port);
module.exports = app;
