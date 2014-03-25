// imports
var express = require('express');
var app = express();

// Set up vhosts
// localhost
app.use(express.vhost('localhost', require('./apps/portfolio').app));
app.use(express.vhost('server.localhost', require('./apps/server').app));
app.use(express.vhost('blog.localhost', require('./apps/blog').app));
app.use(express.vhost('windowsphone.localhost', require('./apps/windowsphone').app));

// thisita.net
app.use(express.vhost('thisita.net', require('./apps/portfolio').app));
app.use(express.vhost('server.thisita.net', require('./apps/server').app));
app.use(express.vhost('blog.thisita.net', require('./apps/blog').app));
app.use(express.vhost('windowsphone.thisita.net', require('./apps/windowsphone').app));

// Fast redirect
app.use(express.vhost('thisita.asuscomm.com', express().get('*', function(req, res) {
  res.redirect('http://thisita.net/');
})));

// Listen
app.listen(process.env.PORT || 8080);