var express = require('express');
var router = express.Router();
const user_dao = require('../dao/userDao');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index/index',{power:req.session.power});
});
router.get('/get_power',function (req, res) {
  res.json({power:req.session.power})
});
router.get('/get_name',function (req, res) {
  res.json({name:req.session.nick_name});
});
router.get('/register',function (req,res,next) {
  res.render('index/register')
});
router.get('/login',function (req,res) {
  res.render('index/login');
});
router.get('/terminate',function (req, res) {
  // res.json({})
  req.session.power = null;
  req.session.nick_name = null;
  req.session.userId = null;
  res.json({result:1})
})
router.post('/register',function (req, res) {
  var name=req.body.name;
  var tele=req.body.tel;
  var pass=req.body.pass;
  var id = req.body.user_id;
  user_dao.register(name,tele,pass,id,function (result) {
    if(result.affectedRows == 1){
      req.session.nick_name = name;
      req.session.userId = id;
      res.json({text:'yes'})
    }
  });
});
router.get('/login',function (req, res) {
  res.render('index/login')
});
router.post('/login',function (req, res) {
  var name=req.body.name;
  var pass = req.body.pass;
  user_dao.login(name,pass,function (result) {
    req.session.power = result.session[0].power;
    req.session.userId = result.session[0].user_id;
    req.session.nick_name = name;
    // console.log(result.session[0].user_id);
    res.json({num:result.total[0].num});
  })
})
module.exports = router;
