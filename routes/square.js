var express = require('express');
var router = express.Router();
const square_dao = require('../dao/squareDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  square_dao.sel_question(function (result) {
    console.log(result.res);
    res.render('square/square',{topic:result.res});
  })

});
router.get('/save',function (req, res) {
  res.render('square/save')
});
router.post('/save',function (req, res) {
  square_dao.ask_question(req.body,req.session.userId,function (result) {
    if(result.affectedRows == 1){
      res.json({result:'ok'})
    }
  })
});
module.exports = router;