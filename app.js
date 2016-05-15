'use strict';

var express = require('express');

var app 	= express();

app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/assets'));
//Store all JS and CSS in Scripts folder.

app.use(express.static(__dirname + '/projects'));
//Store all Projects in projects folder.

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Start the server
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address,
    server.address().port);
  console.log('Press Ctrl+C to quit.');
});
