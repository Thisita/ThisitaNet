var routes = require('./portfolio');

module.exports = function(app) {
  // Set up the routes
  app.get('/', function(req,res) { res.redirect('/index.html'); });
  app.get('/index.html', routes.index);
  app.get('/development.html', routes.development);
  app.get('/security.html', routes.security);
  app.get('/contact.html', routes.contact);
};