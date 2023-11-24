const mongoose = require("mongoose");

const Requests = new mongoose.Schema({
	sendid: { type: String },
	userid:{type:String},
	name: { type: String},
	mobile: { type: Number }
});

module.exports = mongoose.model("Requests", Requests);