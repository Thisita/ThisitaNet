var routes = require('./windowsphone');

module.exports = function(app) {
  // Set up the routes
  app.get('/', function(req,res) { res.redirect('/index.html'); });
  app.get('/index.html', routes.index);
  app.get('/randomapp.html', routes.randomapp);
  app.get('/minimalcounter.html', routes.minimalcounter);
};