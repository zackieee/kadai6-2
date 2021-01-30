const express = require('express');
const request = require('request');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    host: req.headers.host,
  });
});

module.exports = router;