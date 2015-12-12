var express = require('express');
var data = express.Router();

data.get('/', function(req, res) {
  res.send('Hello from data root route.');
});

data.get('/users', function(req, res) {
  res.send('List of data users.');
});

module.exports = data;