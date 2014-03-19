var portfolio = require('./portfolio');
var blog = require('./projects/blog');
var server = require('./projects/server');
var android = require('./projects/android');
var windowsPhone = require('./projects/windowsphone');

exports = function(app) {


  // Set up the routes
  app.get('/', function(req,res) { res.redirect('/index.html'); });
  app.get('/index.html', portfolio.index);
  app.get('/development.html', portfolio.development);
  app.get('/security.html', portfolio.security);
  app.get('/contact.html', portfolio.contact);

  app.get('/projects/blog/index.html', blog.index);
  app.get('/projects/server.html', server.index);
  //app.get('/projects/android/arrowfood.html', android.arrowfood);
  app.get('/projects/windowsphone/index.html', windowsPhone.index);
  app.get('/projects/windowsphone/randomapp.html', windowsPhone.randomapp);
  app.get('/projects/windowsphone/minimalcounter.html', windowsPhone.minimalcounter);
};