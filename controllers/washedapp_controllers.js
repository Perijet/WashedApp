 //go to previous folder and search for config/orm.js
var orm = require('../config/orm.js');
var express = require('express');
var router = express.Router();

router.get('/inv', function(req, res) {
	orm.selectAll("supplies", function(err, result){
		console.log(result)
		res.render('supplies', {
	//	res.render('index', {inv_data});
			inventoryArray: result
		});
		console.log( );
		//{{#each inventoryArray}} (handlebar)
		// if (result) {
		// 	res.redirect('/');
		// } else {
		// 	res.redirect('/error');
		// }
	});
	});
//post route -> back to index
router.post('/inv/create/:type', function(req, res) {
	var inventoryObj = req.body;
	var invType = req.params.type;
	//takes the request object  using it as input for inv.addinv
	orm.insertSupplies(invType, inventoryObj, function(err, result){
		console.log(result);
		if (result) {
			res.redirect('/');
		} else {
			res.redirect('/error');
		}
	});
});

router.put('/inv/update/:type', function(req, res) {
	var inventoryObj = req.body;
	var invType = req.params.type;
	orm.updateSupplies(invType, inventoryObj, function(err, result){
		console.log(result);
		if (result) {
			res.redirect('/');
		} else {
			res.redirect('/error');
		}
	});

	});


// router.delete('/inv/delete/:type', function(req, res) {
// 	var inventoryObj = req.body;
// 	var invType = req.params.type;
// 	//takes the request object  using it as input for inv.addinv
// 	orm.deleteSupplies(invType, inventoryObj, function(err, result){
// 		console.log(result);
// 		if (result) {
// 			res.redirect('/');
// 		} else {
// 			res.redirect('/error');
// 		}
// 	});
// });












	//inv.create(req.body, function(result){
		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
		

//delete inventory item - find by ID
// 	orm.delete(req.body, function(result){
// 	 inv.findByID(req.id, function(err, inv){
// 	 	console.log (result);
// 	if (result == "ok") {
// 		res.redirect('/');
// 	} else {
// 		res.redirect('/error');
// 	}
// 	});		
// });		
//update invrntory item - find by ID	
// 	orm.update(req.body, function(result){
// 		inv.findByID(req.id, function(err,inv){ 
// 		console.log(result);
// 		if (result == "ok") {
// 		res.redirect('/');
// 	} else {
// 		res.redirect('/error');
// 	}
// 	});
// });

module.exports = router;
