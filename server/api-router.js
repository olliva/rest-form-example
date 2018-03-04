const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
const Bear = require('./schemas/bear.js');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(urlencodedParser, function(req, res) {
        if (req.body.bearType && req.body.bearName) {
            const newBear = Bear({
                type: req.body.bearType,
                name: req.body.bearName,
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
        Bear.find({}, function(err, bears) {
          if (err) throw err;

          const preparedBears = [].concat(bears)
            .filter((item) => item.type && item.name)
            .map((item) => `${item.name} - ${item.type}`).join(', ');

          res.send(preparedBears);
        });
    });

router.route('/bears/:bear_type')
    .get(function(req, res) {
        Bear.find({type: req.params.bear_type}, function(err, bear) {
          if (err) throw err;

          const bearsNames = [].concat(bear).map((item) => item.name).join(', ');

          res.send(bearsNames || 'No bears');
        });
    })
    .delete(function(req, res) {
      if (bears[req.params.bear_id]) {
        delete bears[req.params.bear_id];

        res.send('ok');
      }
    });

module.exports = router;
