const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [
			true, 
			"name is required"
		],
	},
	image: {
		type: String,
		required: [
			true, 
			"Image is required"
		],
	},
	chests: {
		type: Number,
		required: [
			true, 
			"chests is required"
		],
	},
	catch: {
		type: String,
		required: [
			true, 
			"catch is required"
		],
	},
	position: {
        type: String,
		required: [
			true, 
			"Position is required"
		],
        enum: ['captain', 'firstMate', 'quarterMaster', 'boatswain', 'powderMonkey'],
    },
	pegLeg:{
		type: Boolean,
		default: false,
	},
	eyePatch:{
		type: Boolean,
		default: false,
	},
	hookHand:{
		type: Boolean,
		default: false,
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;