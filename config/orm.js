var connection = require('./connection.js');

var orm = {
     selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    },
    insertSupplies: function(tableInput, nameInput, itemDesc, stockQuantity, price, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?' 
        connection.query(queryString, {item_name: nameInput, item_descr: itemDesc, stock_quantity:stockQuantity, price:price}, function(err, result) {
            cb(result);
        });        
    },
    insertEquipment: function(tableInput,serialNo, nameInput, type, purchaseDate, serviceDate, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?' 
        connection.query(queryString, {serial_no:serialNo, brand_name:nameInput, type: type, purchase_date:purchaseDate, service_date:serviceDate}, function(err, result) {
            cb(result);
        });        
    },
    updateSupplies: function(tableInput, stockQuantity, idInput, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?'
        connection.query(queryString, [{stock_quantity:stockQuantity}, {id: idInput}], function(err, result) {
            cb(result);
        });
    },
    updateEquipment: function(tableInput, serviceDate, idInput, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?'
        connection.query(queryString, [{service_date:serviceDate}, {id: idInput}], function(err, result) {
            cb(result);
        });
    },
    deleteSupplies: function(tableInput, idInput, cb) {
        var queryString = 'DELETE FROM ' + tableInput + ' WHERE ?'
        connection.query(queryString, {id: idInput}, function(err, result) {
            cb(result);
        });
    },
    deleteEquipment: function(tableInput, idInput, cb) {
     	var queryString = 'DELETE FROM ' + tableInput + ' WHERE ?'
        connection.query(queryString, {id: idInput}, function(err, result) {
            cb(result);
        });
    }
};

module.exports = orm;