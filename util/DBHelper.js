var db=require('./dbDatabase');
var mysql=require('mysql');
var connect_pool=mysql.createPool(db.options);
connect_pool.connectionLimit=100;       //准备好20个链接
connect_pool.queueLimit=100;           //最大链接数
function getConnection(callback){
  connect_pool.getConnection(function(err,client){
    if(err){
      console.log(err.message);
      setTimeout(getConnection,2000);
    }
    callback(client);
  })
}
exports.getConnection=getConnection;