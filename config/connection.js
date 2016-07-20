var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Boston#1',  //enter your passwaord here
    database: 'washedapp_db'  
}) || mysql.createConnection(process.env.JAWSDB_URL);


if(connection == 'localhost'){




connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

}else{
	connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
}

module.exports = connection;
