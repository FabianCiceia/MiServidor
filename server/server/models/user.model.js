const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true, 
			"name is required"
		],
		required: [
			true,
			"Authors is required"
		]
	},
	age: Number
});

const User = mongoose.model("User", UserSchema);

module.exports = User;