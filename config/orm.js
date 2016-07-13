var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    }

    //insert New, Update Table, Delete Item, Modify items etc. as needed. 
};

module.exports = orm;