var express = require('express');
var app = module.exports = express();
var path = require('path');
var memspace = require('memspace');

app.use(express.static(path.join(__dirname, 'public')));
memspace.memspace.setPath(path.join(__dirname, 'memspaces'));
console.log('Path to memspace: ' + memspace.memspace.getPath());
memspace.session.setPath(path.join(__dirname, 'sessions'));
console.log('Path to session: ' + memspace.session.getPath());
//console.log(memspace.session.load('abc'));
//console.log(memspace.session.generateId());

//memhttp.io/api/login/:memspace :user :pass
//memhttp.io/api/data/:token/:path   return data
//memhttp.io/api/data/  :token/:path post :data to write

app.use('/api/auth', require('./controllers/api/auth'));
app.use('/api/data', require('./controllers/api/data'));

app.get('/', function(req, res) {
  res.send('Hello form root route.');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}