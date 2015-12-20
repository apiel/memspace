var express = require('express');
var memspace = require('memspace');
var data = express.Router();

/*data.get('/routes', function(req, res) {
    memspace.memspace.setName(req.query.memspace);
    //var user = memspace.user.loadBySession(req.query.sessionId);    
    var routes = memspace.data.getRoutes();
    res.send(JSON.stringify(routes));
});*/

data.get('/:key', function(req, res) {
    var key = req.params.key;
    
    memspace.memspace.setName(req.query.memspace);
    var user = memspace.user.loadBySession(req.query.sessionId); 
    var response = null;
    if (typeof(req.query.write) !== 'undefined') {
        memspace.data.read(key, user, req.query.write);
        response = JSON.stringify({'success': true});
    }
    else {
        response = memspace.data.read(key, user);
    }
    res.send(response);
});

module.exports = data;