var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.JAWSDB_URL || 'localhost',
    user: 'root',
    password: '',  //enter your password here
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




// var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// //connection.end();

// module.exports = connection;
