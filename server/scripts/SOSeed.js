var mongoose   = require('mongoose');
mongoose.connect('mongodb://'+process.env.dbuser+':'+process.env.dbpass+'@ds017726.mlab.com:17726/techstats'); // connect to our database
var Language = require('../app/language/language.model')
var fetch = require('isomorphic-fetch')

function StackOverflowFilter(result){
  return result.name.toLowerCase() == this.toLowerCase()
}

String.prototype.urilfy = function(){
	return this.replace(/#/g,"%23").replace(/\+/g,"%2B")
}

Language.find(function(err, langs){
	if(err) res.send(err);
	langs.forEach(function(language){
		fetch("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&inname="+language.SOQuery.urilfy()+"&site=stackoverflow")
			.then(function(res){ 
				return res.json() 
			})
			.then(function(json){
				var matchedData = json.items.filter(StackOverflowFilter, language.SOQuery)
				language.questions = matchedData[0].count
				language.save(function(err) {
					if (err) console.log(err);
					console.log("questions count added to " + language.name);
				});
			})
	})	
})

