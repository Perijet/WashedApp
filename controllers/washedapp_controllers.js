
var express = require('express');
var router = express.Router();
var inv = require('../models/washedapp.js');

//get route -> index
router.get('/', function(req,res) {
		res.redirect('/inv')
});

router.get('/inv', function(req,res) {
	//express callback response by calling inv.selectAllinv
	inv.all(function(inv_data){
		//wrapper for orm.js that using MySQL query callback will return inv_data, render to index with handlebar
		res.render('index', {inv_data});
	});
});

//post route -> back to index
router.post('/inv/create', function(req, res) {
	//takes the request object using it as input for inv.addinv
	inv.create(req.body, function(result){
		//wrapper for orm.js that using MySQL insert callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/');
	});
});

//put route -> back to index
router.put('/inv/update', function(req,res){
	inv.update(req.body, function(result){
		//wrapper for orm.js that using MySQL update callback will return a log to console, render back to index with handle
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;