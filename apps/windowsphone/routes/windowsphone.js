var version = require('./version').string;
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    pageTitle: 'Windows Phone Apps',
    siteVersion: version
   });
};

exports.randomapp = function(req, res){
  res.render('randomapp', {
    pageTitle: 'Random App',
    siteVersion: version
  });
};

exports.minimalcounter = function(req, res){
  res.render('minimalcounter', {
    pageTitle: 'Minimal Counter',
    siteVersion: version
  });
};