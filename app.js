const express = require('express');
const path = require('path');

//Init App
const app = express();


//Lod View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res) {
  let articles = [
    {
      id:1,
      title:'Article 1',
      author:'Me',
      body:'Hello one.'
    },
    {
      id:1,
      title:'Article 2',
      author:'Jamie',
      body:'Hello Two.'
    },
    {
      id:1,
      title:'Article 3',
      author:'Me',
      body:'Hello Three.'
    }
  ];
  res.render('index', {
    title:'Articles',
    articles: articles
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
