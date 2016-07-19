var connection = require('./connection.js');

var orm = {
     selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            if (err) { return cb(err, null);}
            cb(null, result);
            
        });
    },

    insert: function(tableInput, invObj, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?'; 
        connection.query(queryString, invObj, function(err, result) {
            if (err) {return cb(err, null);}
            cb(null, result);
        });        
    },
    updateSupp: function(tableInput, invObj1, invObj2 ,cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET StockQuantity = ? WHERE id =' + invObj2;
        connection.query(queryString, invObj1,function(err, result) {
            if (err) { return cb(err, null);}
            cb(null, result);
        });
    },
    updateMach: function(tableInput, invObj1, invObj2 ,cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ServiceDate = ? WHERE id =' + invObj2;
        connection.query(queryString, invObj1,function(err, result) {
            if (err) { return cb(err, null);}
            cb(null, result);
        });
    },
    delete: function(tableInput, invObj, cb) {
        var queryString = 'DELETE FROM ' + tableInput + ' WHERE id = ?';
        connection.query(queryString, invObj, function(err, result) {
            if (err) { return cb(err, null);}
            cb(null, result);
        });
    }
};

module.exports = orm;