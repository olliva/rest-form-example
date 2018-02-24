var bodyParser = require('body-parser');
var path = require('path');

module.exports = function(app) {
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
    });

    // создаем парсер для данных application/x-www-form-urlencoded
    let urlencodedParser = bodyParser.urlencoded({extended: false});

    app.post('/register', urlencodedParser, function(req, res) {
      console.log('req body', req.body);
      console.log('user name', req.param('userName'));
      if (!req.body) return req.sendStatus(400);

      res.render(
            'register',
            {userName: req.body.userName});
    });

    let router = require('./api-router.js');
    app.use('/api', router);
};
