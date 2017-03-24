var express = require('express');
var router = express.Router();
const user_dao = require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index/index',{power:req.session.power});
});
router.get('/register',function (req,res,next) {
  res.render('index/register')
});
router.post('/register',function (req, res) {
  var name=req.body.name;
  var tele=req.body.tel;
  var pass=req.body.pass;
  user_dao.register(name,tele,pass,function (result) {
    if(result.affectedRows == 1){
      req.session.power = 1;
      res.json({text:'yes'})
    }
  });
});
router.get('/login',function (req, res) {
  res.render('index/login')
})
module.exports = router;
