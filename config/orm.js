var connection = require('./connection.js');

var orm = {
     selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            if (err) { return cb(err, null)}
            cb(null, result);
            
        });
    },

    insert: function(tableInput, invObj, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?' 
        connection.query(queryString, invObj, function(err, result) {
            if (err) { return cb(err, null)}
            cb(null, result);
        });        
    },
    update: function(tableInput, invObj_1, invObj_2, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?'
        connection.query(queryString, invObj, function(err, result) {
            if (err) { return cb(err, null)}
            cb(null, result);
        });
    },
    delete: function(tableInput, invObj, cb) {
     	var queryString = 'DELETE FROM ' + tableInput + ' WHERE ?'
        connection.query(queryString, invObj, function(err, result) {
            if (err) { return cb(err, null)}
            cb(null, result);
        });
    }
};

module.exports = orm;