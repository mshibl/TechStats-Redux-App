var mongoose   = require('mongoose');
mongoose.connect('mongodb://'+process.env.dbuser+':'+process.env.dbpass+'@ds017726.mlab.com:17726/techstats'); // connect to our database
var Language = require('../app/language/language.model')

var data = [
    {
        "name": "Java",
        "color": "#5878a9", 
        "icon": "https://icons.iconarchive.com/icons/tatice/cristal-intense/128/Java-icon.png",
    },
    {
    	"name": "JavaScript",
        "color": "#f0db4f",
        "icon": "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png"
    },
    {
    	"name": "Python", 
        "color": "#5e97d0",  
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2000px-Python.svg.png"
    },
    {
    	"name": "Ruby",
        "color": "#852325",
        "icon": "https://ruby-fundamentals.herokuapp.com/images/ico_ruby.png"
    },
    {
    	"name": "C++",
        "color": "#5e97d0",
        "icon": "https://ignite.apache.org/images/cpp.png"
    },
    {
    	"name": "C",
        "color": "#7f8b99",
        "icon": "https://worldvectorlogo.com/logos/c-2975.svg"
    },
    {
    	"name": "C#",
        "color": "#2b0867",
        "icon": "https://gitlab.com/uploads/project/avatar/464970/csharp.png"
    },
    {
    	"name": "Swift",
        "color": "#fe462a",
        "icon": "https://vignette3.wikia.nocookie.net/ipod/images/0/01/Developer_swift_icon.png/revision/latest?cb=20140828235538"
    },
    {
    	"name": "Objective-C",
        "color": "#ad7745",
        "icon": "https://2.bp.blogspot.com/-BuR1DpqQprU/U5CQ_0w2L7I/AAAAAAAABZY/H9wbfbO-kew/s1600/iOS_Objective_C.png"
    },
    {
    	"name": "Perl",
        "color": "#979797",
        "icon": "https://st.pimg.net/perlweb/images/camel_head.v25e738a.png"
    },
    {
    	"name": "Scala",
        "color": "#e10000",
        "icon": "http://www.yoppworks.com/wp-content/uploads/2016/05/Scala-Icon.png"
    },
    {
    	"name": "PHP",
        "color": "#6c7eb7",
        "icon": "http://www.freelogovectors.net/wp-content/uploads/2012/12/PHP-logo.png"
    },
    {
    	"name": "R",
        "color": "#babcbf",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png"
    }
]


data.forEach(function(languageData){		
	Language.findOne({"name": languageData.name}, function(err, language){
		language.icon = languageData.icon
		language.color = languageData.color
		language.save(function(err) {
			if (err) console.log(err);
			console.log("icon and color added to " + language.name);
		});
	})
})