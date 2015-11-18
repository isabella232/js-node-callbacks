// add required modules
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/sinch');

//set up an app
var app = express();
//configure on what port express will create your app
var port = process.env.PORT || 5000;

//congigure body parsing for the app, 
//in this tutorial we will be doing json only
app.use(bodyParser.json());
//add the sinch route 
app.use('/sinch', router);

//add default content type for all requests
app.use(function (req, res, next) {
  res.setHeader("Content-Type","application/json");
  next();
});
//export and start listening
module.exports = app;
app.listen(port);
