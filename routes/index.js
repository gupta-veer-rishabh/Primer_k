var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/loginUser',function(req,res){
  res.render('loginUser')
})
router.get('/loginAdmin',function(req,res){
  res.render('loginAdmin')
})

module.exports = router;
