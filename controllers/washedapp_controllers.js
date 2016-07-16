 //go to previous folder and search for config/orm.js
var orm = require('../config/orm.js');
var express = require('express');
var router = express.Router();

	orm.all(function(invArray){
		res.render('inventoryPage', {
	//	res.render('index', {inv_data});
			inventoryArray: invArray
		})
		console.log( );
		//{{#each inventoryArray}} (handlebar)
		if (status == "ok") {
			res.redirect('/');
		} else {
			res.redirect('/error')
		}
	});
//post route -> back to index
//router.post('/inv/create', function(req, res) {
	//takes the request object  using it as input for inv.addinv
	orm.create(req.body, parameter1, parameter2, function(result){
		console.log(result);
		if (result == "ok") {
			res.redirect('/');
		} else {
			res.redirect('/error')
		}
	});
	//inv.create(req.body, function(result){
		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
		

//delete inventory item - find by ID
	orm.delete(req.body, function(result){
	 inv.findByID(req.id, function(err, inv)
	 	console.log (result);
	if (result == "ok") {
		res.redirect('/')
	} else {
		res.redirect('/error')
	});		
});		
//update invrntory item - find by ID	
	orm.update(req.body, function(result){
		inv.findByID(req.id, function(err,inv)) 
		console.log(result);
		if (result == "ok") {
		res.redirect('/')
	} else {
		res.redirect('/error');
	});
});

module.exports = router;
