var version = require('./version').string;
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    pageTitle: 'Thisita: The Blog',
    siteVersion: version
  });
};