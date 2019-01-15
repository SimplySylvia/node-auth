const mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema(
	{
	email: { 
		type: String, 
		required: true, 
		unique: true, 
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ ,
		
		},
	password: { type: String, required: true,  select: false}
	}
	))