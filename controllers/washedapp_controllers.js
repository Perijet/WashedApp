 //go to previous folder and search for config/orm.js
var orm = require('../config/orm.js');
var express = require('express');
var router = express.Router();


router.get('/home', function(req, res){
		console.log(res);
		res.render('home');
});
	
router.get('/inv', function(req, res){
	orm.selectAll("supplies", function(err, result){
		console.log(result);
		res.render('supplies', {
			inventoryArray: result
		});
		console.log( );
	});
});

router.get('/equip', function(req, res) {
	orm.selectAll("equipment", function(err, result){
		console.log(result);
		res.render('machines', {
			inventoryArray: result
		});
		console.log( );
	});
});

router.get('/dash', function(req, res) {
	orm.selectAll("supplies", function(err, result){
		console.log(result);
		res.render('index', {
			inventoryArray: result
		});
		console.log( );
	});
});

//post route -> back to index
router.post('/inv/create/:type', function(req, res){
	var inventoryObj = req.body;
	var invType = req.params.type;
	//takes the request object  using it as input for inv.addinv
	orm.insert(invType, inventoryObj, function(err, result){
		console.log(result);
		if (result) {
			res.redirect('/');
		} else {
			res.redirect('/error');
		}
	});
});

router.put('/inv/update/:type', function(req, res){
	var inventoryObj = req.body;
	var invType = req.params.type;
	orm.update(invType, inventoryObj.StockQuantity, inventoryObj.id, function(err, result){
		console.log(req.body);
		if (result) {
			res.redirect('/');
		} else {
			res.redirect('/error');
		}
	});

	});


router.delete('/inv/delete/:type', function(req, res){
	var inventoryObj = req.body;
	var invType = req.params.type;
	//takes the request object  using it as input for inv.addinv
	orm.delete(invType, inventoryObj, function(err, result){
		console.log(result);
		if (result) {
			res.redirect('/');
		} else {
			res.redirect('/error');
		}
	});
});

module.exports = router;
