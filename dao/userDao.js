var Dbpool=require('../util/DBHelper')
var mysql=require('mysql');
function register(name,tele,pass,callback){
  Dbpool.getConnection(function (client) {
    client.query('insert into user (nick_name,tele,pass,power) values (?,?,?,?)',[name,tele,pass,1],function (error, result) {
      if(error){
        console.log(error.message);
        return;
      }
      callback({affectedRows:1})
    })
  })
}
exports.register=register;