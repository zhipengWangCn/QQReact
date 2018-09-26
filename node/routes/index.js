var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/logn.json', function(req, res, next) {
  res.send('success')
});

module.exports = router;
