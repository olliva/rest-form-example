const express = require('express');
const path = require('path');
require('colors');

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo/test');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('app/dist'));

require('./server/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`.green);
});
