const mongoose = require("mongoose");

const lostItem = new mongoose.Schema({
	itemName: { type: String, required: true },
	userid:{type:String,
        },
	mobileno: { type: Number, required: true },
	location: { type: String, required: true },
	description:{
		type:String
	},
	image: String
});

module.exports = mongoose.model("LostItem", lostItem);