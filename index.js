var express = require('express');

var express = require('express');
var app = express();
var stormpath = require('express-stormpath');

app.get('/notes', function(req, res) {
    res.json({ notes: "This is your notebook." });
});
app.listen(3000);