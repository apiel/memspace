var express = require('express');
var memspace = require('memspace');
var auth = express.Router();

auth.get('/', function(req, res) {
    memspace.memspace.setName(req.query.memspace);
    //console.log('path to user'+memspace.user.getPath());
    var auth = memspace.user.auth(req.query.username, req.query.password);
    res.send(JSON.stringify(auth));
    //res.send('Hello from auth root route.');
});


auth.get('/me', function(req, res) {
    memspace.memspace.setName(req.query.memspace);
    var auth = memspace.user.loadBySession(req.query.sessionId);
    res.send(JSON.stringify(auth));
});

auth.get('/logout', function(req, res) {
  res.send('Logout.');
});

auth.get('/save', function(req, res) {
  res.send('Save.');
  // or create?? // when you create you have a default set of group
  // admin can change group...
  
});

auth.get('/users', function(req, res) {
  res.send('List of auth users.');
});

module.exports = auth;