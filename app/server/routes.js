const bodyParser = require('body-parser');
const path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
    });

    // создаем парсер для данных application/x-www-form-urlencoded
    let urlencodedParser = bodyParser.urlencoded({extended: false});

    app.post('/register', urlencodedParser, function(req, res) {
      if (!req.body) return req.sendStatus(400);

      res.render(
            'register',
            {userName: req.body.userName});
    });

    const router = require('./api-router.js');
    app.use('/api', router);
};
