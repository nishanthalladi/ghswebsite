#!/usr/bin/nodejs

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express');
var app = express();
var path = require('path');
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
var hbs = require('hbs');
app.set('view engine', 'hbs');


// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

// app.set('port', process.env.PORT || 8080 );
app.set('port', 80);


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    // res.send('wilkommen und hallo');
    res.render('home.hbs');
});


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});