var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LanguageSchema = new Schema({
	name: String,
	query: String,
	SOQuery: String,
	demand: Number,
	questions: Number,
	icon: String,
	color: String
})

module.exports = mongoose.model('Language', LanguageSchema);