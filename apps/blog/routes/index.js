var routes = require('./blog');

module.exports = function(app) {
  // Set up the routes
  app.get('/', function(req,res) { res.redirect('/index.html'); });
  app.get('/index.html', routes.index);
  app.get('/posts', function(req,res) { res.redirect('/index.html'); });
  app.get('/posts/:year/:month/:day/:id', routes.post);
};