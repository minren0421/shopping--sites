const mysql = require('mysql');

var pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'',
    database:'myprojust',
    connectionLimit:20
})

// 導出連接池對象
module.exports = pool;