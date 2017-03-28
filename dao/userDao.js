var Dbpool=require('../util/DBHelper')
var mysql=require('mysql');
function register(name,tele,pass,callback){
  Dbpool.getConnection(function (client) {
    client.query('insert into user (nick_name,tele,pass,power) values (?,?,?,?)',[name,tele,pass,0],function (error, result) {
      if(error){
        console.log(error.message);
        return;
      }
      callback({affectedRows:1})
    })
  })
};
function login(name,pass,callback) {
  Dbpool.getConnection(function (client) {
    client.query('select count(*) num from user where nick_name=? and pass = ? or tele=? and pass = ?',[name,pass,name,pass],function (error, result) {
      if(error){
        console.log(error.message);
        return;
      }
      // callback(result);
      client.query('select power from user where nick_name =? and pass =? or tele=? and pass=?',[name,pass,name,pass],function (error,res) {
        callback({total:result,power:res})
      })
    })
  })
}
exports.register=register;
exports.login=login;