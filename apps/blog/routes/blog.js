
// includes
var version = require('./version').string;
var fs = require('fs');
var path = require('path');

var postsPath = './apps/blog/posts';

// The index route handler
exports.index = function(req, res){
  // Look up the dir of posts
  var posts = fs.readdirSync(postsPath);
  posts.reverse();
  
  // Only parse the first 5
  var n = 5;
  if(posts.length < 5) {
    n = posts.length;
  }
  
  var postsData = [];
  // Load and parse the files
  for(var i = 0; i < n; ++i) {
    postsData.push(JSON.parse(fs.readFileSync(postsPath + '/' + posts[i], 'utf8')));
  }
  
  // render
  res.render('index', {
    pageTitle: 'ThisitaNet Blog',
    siteVersion: version,
    posts: postsData
  });
};

// The single post route handler
exports.post = function(req, res){
  var file = postsPath + '/' + req.params.postId + '.json';
  console.log("File \"" + file + "\" requested");
  if(fs.existsSync(file)) {
    var post = JSON.parse(fs.readFileSync(file, 'utf8'));
    res.render('post', {
      pageTitle: 'ThisitaNet Blog: ' + post.title,
      siteVersion: version,
      post: post
    });
  } else {
    res.send(404);
  }
};