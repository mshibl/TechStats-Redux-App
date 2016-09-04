var CronJob = require('cron').CronJob;
var mongoose   = require('mongoose');
var Language = require('../app/models/language')
require('isomorphic-fetch')

// Connect Database
mongoose.connect('mongodb://'+process.env.dbuser+':'+process.env.dbpass+'@ds017726.mlab.com:17726/techstats'); // connect to our database

new CronJob('30 * * * * *', function() {
  console.log('You will see this message every 30 seconds');
}, null, true, 'America/Los_Angeles');

// Language.find({}, function(err, languages) {
// 	// TODO Log errors
// 	if (err) throw err;
//   	languages.forEach(function(language){
// 	  	fetch("http://api.indeed.com/ads/apisearch?publisher=453429751741602&q="+language.query+"&v=2&format=json")
// 	  		.then(function(res, err){
// 	  			if(err) throw err;
// 	  			res.json()
// 	  				.then(function(json, err){
// 	  					if(err) throw err;
// 	  					Language.update({name: language.name}, {demand: json.totalResults}, function(err, numberAffected){
// 	  						if(err) throw err;
// 	  						// TODO Log progress
// 	  						console.log(numberAffected)
// 	  					})
// 	  				})
// 	  	})
// 	})
// });