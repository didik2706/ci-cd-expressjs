var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({
    status: 'success',
    message: 'data successfully retrieved'
  })
});

router.get('/learning', (req, res) => {
  return res.json({
    message: 'Hello student'
  })
})

router.get('/youtube', (req, res) => {
  return res.json({
    message: 'Hello, Youtube'
  })
})

module.exports = router;
