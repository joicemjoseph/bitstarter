var express = require('express');
var app = express.createServer(express.logger());
app.get("/", function(request, response) { res.send(index.html); });