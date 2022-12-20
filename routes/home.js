var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'RiefDev', url: req.originalUrl });
});

router.get('/portfolio', function(req, res) {
  res.render('portfolio', { title: 'RefDev', url: req.originalUrl });
});

module.exports = router;
