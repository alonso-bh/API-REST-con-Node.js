/*
const http = require('http')
const fs = require('file-system')



// crear el servidor HTTP: 
http.createServer( function(req, res) {
	
	try{
		var file = fs.readFileSync("." + req['url'] ,  'utf8');
		res.write(file); 

	}
	catch(err){ 
		if(err){
			res.write("404 File not found"); 
		}
	 }	
	res.end();

} ).listen(3000); 
*/





const express = require('express')
const app = express();
const port = 3000;
const routes = require('./routes/api'); 
const bodyParser = require('body-parser'); 		// para obtener los valores de los POST, PUT ...

const mongoose = require('mongoose');    // para conectarse a la bd mongo 


app.get('/user', function (req, res)  {
  res.send({name: 'yo'});
  res.end(); 
})


// connect to db
mongoose.connect('mongodb://localhost/foo', { useFindAndModify: false }); 
mongoose.Promise = global.Promise;


// USO DE MIDDLEWARE

app.use(express.static('public_html')) ;		// servidor web de páginas estáticas
app.use(bodyParser.json()); 	
app.use('/api', routes); 

/*app.use(function(req,res, err, next){
	console.log("+++++++++++++++" + err);
	res.end({error: err.message});  

}); 
*/
// configurando el puerto de escucha ... 
app.listen(port, function(err, data)  {
  console.log(`Example app listening at http://localhost:${port}`)
})






