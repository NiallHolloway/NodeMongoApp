const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

//Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

//Check for DB Errors
db.on('error', function() {
  console.log(err);
});

//Init App
const app = express();

//Bring in models
let Article = require('./models/article');

//Lod View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res) {
  Article.find({}, function(err, articles){
    if (err) {
      console.log(err);
    }else {
      res.render('index', {
        title:'Articles',
        articles: articles
      });
    }
  });
});

//Add Route
app.get('/articles/add', function(req, res){
  res.render('add_article', {
    title:'Add Article'
  });
});

//Start Server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});
