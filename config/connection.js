var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.JAWSDB_URL  || 'localhost',
    user: 'root',
    password: 'Boston#1',  //enter your passwaord here
    database: 'washedapp_db'  
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});






module.exports = connection;




