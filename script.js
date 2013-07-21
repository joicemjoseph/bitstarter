var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Clever Kitchens'});
});

app.get('/recipes', function(req, res){
  res.render('layout.ejs', {
    title: 'Clever Kitchens - Recipes', 
    body: '<h1>All Recipes</h1>'
  });
});

app.get('/recipes/:title', function(req, res) {
 res.send('<h1>' + req.params.title + '</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);