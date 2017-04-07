var Dbpool=require('../util/DBHelper')
var mysql=require('mysql');
function ask_question(content,user_id,callback){
  Dbpool.getConnection(function (client) {
    client.query('insert into ask (ask_id,user_id,title,content,time) values (?,?,?,?,?)',[content.id,user_id,content.title,content.content,content.time],function (error, result) {
      if(error){
        console.log(error.message);
        return;
      }
      callback({affectedRows:1})
    })
  })
};
function sel_question(callback){
  Dbpool.getConnection(function (client) {
    client.query('select ask_id,user_id,title,content,time from ask order by time desc',function (error, result) {
      if(error){
        console.log(error.message);
        return;
      }
      callback({res:result})
    })
  })
};
exports.ask_question=ask_question;
exports.sel_question=sel_question;