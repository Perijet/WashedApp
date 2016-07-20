 //go to previous folder and search for config/orm.js
var handlebars 	= require('handlebars');
var orm = require('../config/orm.js');
var express = require('express');
var router = express.Router();
var methodOverride 	= require('method-override');

router.get('/', function(req, res){
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
	console.log(inventoryObj);
	//takes the request object  using it as input for inv.addinv
	orm.insert(invType, inventoryObj, function(err, result){
		console.log(result);
		if (result) {
			if(invType == 'supplies'){
				res.redirect('/inv');
			}else{
				res.redirect('/equip');
			}
		} else {
			res.redirect('/error');
		}
	});
});

router.post('/inv/update/:type', function(req, res){
	var invType = req.params.type;

	if(invType == 'supplies'){

		orm.updateSupp(invType, req.body.StockQuantity, req.body.id ,function(err, result){
			console.log(req.body);
			if (result) {
				if(invType == 'supplies'){
					res.redirect('/inv');
				}else{
					res.redirect('/equip');
				}
			} else {
				res.redirect('/error');
			}
		});
	}else{
		orm.updateMach(invType, req.body.ServiceDate, req.body.id ,function(err, result){
			console.log(req.body);
			if (result) {
				if(invType == 'supplies'){
					res.redirect('/inv');
				}else{
					res.redirect('/equip');
				}
			} else {
				res.redirect('/error');
			}
		});
	}

});


router.all('/inv/delete/:type', function(req, res){
	var invType = req.params.type;
	orm.delete(invType, req.body.id, function(err, result){
		console.log(result);
		if (result) {
			if(invType == 'supplies'){
				res.redirect('/inv');
			}else{
				res.redirect('/equip');
			}
		} else{
			res.redirect('/error');
		}
	});
});

module.exports = router;
