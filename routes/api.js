const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
// MIDDLEWARE de acceso y gestión de la API ("las tripas de la api") 


/*TRATAMIENTO DE CADA PETICIÓN HTTP (Las 4 principales, en base a CRUD)  */

// respuesta a un get general: sacar todos los users
router.get ("/user", function(req, res){
	User.find({}).then( function(users) {
		res.send(users);
	} ); 
});


// response to a GET req
router.get ("/user/:id", function(req, res){
	User.findOne({_id:req.params.id}).then( function(user) {
		res.send(user);
	} ); 
});


// POST
router.post ('/user', function(req, res){
	console.log(req.body);

	// crear un nuevo user en la colección 
	User.create(req.body).then(function(data){
		res.send(data); 
	}); //.catch(next) ;  	
});


// PUT
router.put ('/user/:id', function(req, res){
	User.findByIdAndUpdate( {_id:req.params.id}, req.body).then(function(user){
		res.send(user); 
	}); 
});


// DELETE 
router.delete ("/user/:id", function(req, res){
	User.findByIdAndRemove( {_id: req.params.id} ).then( function(user){
		res.send(user); 
	});	
});


// exportar este middleware para lograr el enrutamiendo de /user
module.exports = router; 


