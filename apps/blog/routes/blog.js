var version = require('./version').string;
var fs = require('fs');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    pageTitle: 'ThisitaNet Blog',
    siteVersion: version
  });
};

exports.post = function(req, res){
  getArticle(req.params.year,
    req.params.month,
    req.params.day,
    req.params.id,
    function(err,data) {
      if(err) {
        res.render('postnotfound', {
          pageTitle: 'ThisitaNet Blog',
          siteVersion: version
        });
      } else {
        res.render('post', {
          pageTitle: 'ThisitaNet Blog: ' + data.title,
          siteVersion: version,
          post: data
        });
      }
    }
  );
  res.render('post', {
    pageTitle: 'ThisitaNet Blog: ',
    siteVersion: version
  });
};

// helper functions

function getArticle(y,m,d,i,cb) {
  var year = parseInt(y),
    month = parseInt(m),
    day = parseInt(d),
    id = parseInt(i);
  if(isNaN(year) || isNaN(month) || isNaN(day) || isNaN(id)) {
    // somebody is pulling our leg
    cb(true, null);
  }
  
  var file = _dirname + '/public/json/';
  file += year + '/' + month + '/' + day + '/' + id + '.json';
  
  fs.readFile(file, 'utf8', function(err,data) {
    if(err) {
      cb(true, null);
    }
    
    var json = JSON.parse(data);
    cb(false, json);
  });
}