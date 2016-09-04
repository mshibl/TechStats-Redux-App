var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LanguageSchema = new Schema({
	name: String,
	query: String,
	demand: Number
})

module.exports = mongoose.model('Language', LanguageSchema);