var routes = require('./server');

module.exports = function(app) {
  // Set up the routes
  app.get('/', function(req,res) { res.redirect('/index.html'); });
  app.get('/index.html', routes.index);
};