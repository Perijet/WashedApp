var connection = require('./connection.js');

var orm = {
     selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput;
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    },
    insertSupplies: function(tableInput, nameInput, itemDesc, stock_quantity, price, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?' 
        connection.query(queryString, {itemName: nameInput, ItemDescription: itemDesc, StockQuantity:stock_quantity, Price:price}, function(err, result) {
            cb(result);
        });        
    },
    insertEquipment: function(tableInput,serialNo, nameInput, type, purchase_date, service_date, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' SET ?' 
        connection.query(queryString, {SerialNumber:serialNo, BrandName:nameInput, Type: type, PurchaseDate:purchase_date, ServiceDate:service_date}, function(err, result) {
            cb(result);
        });        
    },
    updateSupplies: function(tableInput, stock_quantity, idInput, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?'
        connection.query(queryString, [{stockQuantity:stock_quantity}, {id: idInput}], function(err, result) {
            cb(result);
        });
    },
    updateEquipment: function(tableInput, service_date, idInput, cb) {
        var queryString = 'UPDATE ' + tableInput + ' SET ? WHERE ?'
        connection.query(queryString, [{serviceDate:service_date}, {id: idInput}], function(err, result) {
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