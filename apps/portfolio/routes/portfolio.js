var version = require('./version').string;
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    pageTitle: 'Ian Zachary Ledrick aka Thisita',
    siteVersion: version
  });
};

exports.development = function(req, res){
  res.render('development', {
    pageTitle: 'Ian Zachary Ledrick aka Thisita',
    siteVersion: version
  });
};

exports.security = function(req, res){
  res.render('security', {
    pageTitle: 'Ian Zachary Ledrick aka Thisita',
    siteVersion: version
  });
};

exports.contact = function(req, res){
  res.render('contact', {
    pageTitle: 'Ian Zachary Ledrick aka Thisita',
    siteVersion: version
  });
};
