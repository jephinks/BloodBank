const mysql     = require('mysql');
const util      = require('util');


/*-- MySQL Connection Async/Await --*/
var pool = mysql.createPool({
    host: 'localhost'
    ,port: 3306
    ,user: 'root'
    ,password: ''
    ,database: 'mydatabase'
})
pool.query = util.promisify(pool.query);
pool.getConnection = util.promisify(pool.getConnection);

(async() =>{
    try{
      await pool.query('SELECT NOW() AS "theTime"');
      
     
      console.log("Mysql Connected");
    }catch(err){
      console.log(err);
    }
  })();
module.exports.pool = pool;

