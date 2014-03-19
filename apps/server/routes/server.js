var version = require('./version').string;
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    pageTitle: 'ThisitaNet Public Research and Development Web Server',
    siteVersion: version
  });
};