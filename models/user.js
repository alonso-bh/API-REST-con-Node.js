/*
	En este fichero se define el esquema (como una tabla relacional) de cada 
	elemento de tipo User mediante un Schema del paquete mongoose. A partir de 
	ese 'esquema', se generael modelo, que se llamará User (importante la U 
	mayúscula), que se exportará al final del fichero para poder usarlo en toda
	la app. 

*/

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	name: {
		type: String,
		required: [true, "This field is required"]
	},
	dni: {
		type: String,
		required: [true, "This file is required"],
		default: ""
	}
} );


// definir el modelo, que representará a la colección de la bd de mongo
const User = mongoose.model('user', UserSchema); 


// exportar el modelo para que se pueda usar donde se quiera, será imprescindible
module.exports = User; 
