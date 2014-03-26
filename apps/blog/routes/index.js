var routes = require('./blog');

module.exports = function(app) {
  // Set up the routes
  app.get('/', function(req,res) { res.redirect('/index.html'); });
  app.get('/index.html', routes.index);
  app.get('/posts', function(req,res) { res.redirect('/index.html'); });
  app.get('/posts/:postId([0-9]{12}).html', routes.post);
};