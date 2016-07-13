var express = require('express');

var app = new express();

app.get('/', function (req, res) {
    res.render('./../SPA/index.ejs', {});
})
.listen('1111');