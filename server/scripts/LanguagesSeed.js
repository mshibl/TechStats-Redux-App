var mongoose   = require('mongoose');
mongoose.connect('mongodb://'+process.env.dbuser+':'+process.env.dbpass+'@ds017726.mlab.com:17726/techstats'); // connect to our database
var Language = require('../app/language/language.model')

var languages = [
	{name: "Java", query: "java"},
	{name: "JavaScript", query: "javascript"},
	{name: "Python", query: "python"},
	{name: "Ruby", query: "ruby, rails"},
	{name: "C++", query: "c%2B%2B"},
	{name: "C", query:"c software engineer,c software,c developer,c engineer"},
	{name: "C#", query: "c%23"},
	{name: "Swift", query: "Swift"},
	{name: "Objective-C", query: "objective c"},
	{name: "Perl", query: "perl"},
	{name: "Scala", query: "scala"},
	{name: "PHP", query: "php"},
	{name: "R", query: "r analyst"}
]

mongoose.connection.collections['languages'].drop( function(err) {
    console.log('languages collection dropped');
});
	
for(var i=0; i<languages.length; i++){
	var language = new Language()
	language.name = languages[i].name
	language.query = languages[i].query
	language.save(function(err) {
		if (err) console.log(err);
		console.log("language created");
	});
}	