var version = require('./../version').string;
/*
 * GET home page.
 */

exports.arrowfood = function(req, res){
  res.render('projects/android/arrowfood', {
    pageTitle: 'Arrow Food App',
	siteVersion: version
  });
};