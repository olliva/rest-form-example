var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// создаем парсер для данных application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});
var Bear = require('./database.js');
// var bears = {
//   1: 'First Bear',
//   2: 'Second Bear',
// };


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(urlencodedParser, function(req, res) {
        console.log('inside save', req.body.bearId, req.body.bearName, req.params);
        if (req.body.bearId && req.body.bearName) {
            var newBear = Bear({
                id: req.body.bearId,
                name: req.body.bearName
            });

            // save the user
            newBear.save(function(err) {
                if (err) {
                    res.send('Bear created');
                };

                res.send('Bear created');
            });
        }
    })
    .get(urlencodedParser, function(req, res) {
        // let allBearsNames = Object.values(bears).join(', ');
        //
        // res.send(allBearsNames);

        Bear.find({}, function(err, bears) {
          if (err) throw err;

          // object of all the users
          console.log(bears);
          res.send(bears)
        });
    });

router.route('/bears/:bear_id')
    .get(function(req, res) {
        Bear.find({ id: req.params.bear_id }, function(err, bear) {
          if (err) throw err;

          // object of the user
          res.send(bear);
        });
    })
    .put(function(req, res) {
        var newBear = Bear({
            id: req.params.bear_id,
            name: req.body.bearName
        });

        // save the user
        newBear.save(function(err) {
            if (err) throw err;

            res.send('Bear created');
        });
    })
    .delete(function(req, res) {
      if (bears[req.params.bear_id]) {
        delete bears[req.params.bear_id];
        res.send('ok');
      }
    });

module.exports = router;
