var express = require('express');
var path = require('path');
require('colors');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myappdatabase');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));

require('./server/routes')(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`.green);
});
