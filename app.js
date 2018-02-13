var express = require('express');
var colors = require('colors');
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var pug = require('pug');
var router = express.Router();

var bears = {
  1: 'First Bear',
  2: 'Second Bear'
};
app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// создаем парсер для данных application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.post('/register', urlencodedParser, function(req, res) {
  console.log('req body', req.body);
  console.log('user name', req.param('userName'));
  if (!req.body) return req.sendStatus(400);

  res.render(
        'register',
        { userName: req.body.userName })
});

app.use('/api', router);

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(urlencodedParser, function(req, res) {
        if (req.body.bearId && req.body.bearName && !bears[req.body.bearId]) {
          bears[req.body.bearId] = req.body.bearName;
          res.send('ok');
        }

        res.send('error');
    })
    .get(urlencodedParser, function(req, res) {
        var allBearsNames = Object.values(bears).join(', ');

        res.send(allBearsNames);
    });

router.route('/bears/:bear_id')
    .get(function(req, res) {
      if (bears[req.params.bear_id]) {
        res.send(bears[req.params.bear_id]);
      }

      res.send('error');
    })
    .put(function(req, res) {
      if (bears[req.params.bear_id]) {
        bears[req.params.bear_id] = req.body.bearName;
        res.send('ok');
      }

      res.send('error');
    })
    .delete(function(req, res) {
      if (bears[req.params.bear_id]) {
        delete bears[req.params.bear_id];
        res.send('ok');
      }
    })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!'.green);
});
