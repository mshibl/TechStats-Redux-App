var express    = require('express');
var languages = express.Router();
var Language = require('./language.model')

languages.use(function(req, res, next) {
	console.log('accessing languages api');
	next();
});

languages.route('/demand')
	.get(function(req,res){
		Language.find(function(err, langs){
			if(err) res.send(err);
			res.json(langs)
		})
	})

module.exports = languages