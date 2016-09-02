import { UPDATE_CHART } from '../constants/ActionTypes';

let initState = {	categoryField: "name",
					type: "serial",
					theme: "dark",
					graphs: [{
							"bulletOffset": 30,
							"bulletSize": 50,
							"colorField": "color",
							"cornerRadiusTop": 8,
							"fillAlphas": 0.8,
							"lineAlpha": 0,
							"customBulletField": "icon",
							"type": "column",
							"balloonText": "<span style='font-size:13px;'><b>[[value]]</b></span>",
							"valueField": "demand"
						}], 
					dataProvider: [
				        {
				            "name": "Java",
				            "demand": 0,
				            "color": "#5878a9", 
				            "icon": "http://findicons.com/files/icons/1008/quiet/256/java.png",
				        },
				        {
				        	"name": "JavaScript",
				        	"demand": 0,
				            "color": "#f0db4f",
				            "icon": "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png"
				        },
				        {
				        	"name": "Python", 
				            "demand": 0,
				            "color": "#5e97d0",  
				            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2000px-Python.svg.png"
				        },
				        {
				        	"name": "Ruby",
				            "demand": 0,
				            "color": "#852325",
				            "icon": "http://ruby-fundamentals.herokuapp.com/images/ico_ruby.png"
				        },
				        {
				        	"name": "C++",
				            "demand": 0,
				            "color": "#5e97d0",
				            "icon": "https://ignite.apache.org/images/cpp.png"
				        },
				        {
				        	"name": "C",
				            "demand": 0,
				            "color": "#7f8b99",
				            "icon": "https://worldvectorlogo.com/logos/c-2975.svg"
				        },
				        {
				        	"name": "C#",
				            "demand": 0,
				            "color": "#2b0867",
				            "icon": "https://gitlab.com/uploads/project/avatar/464970/csharp.png"
				        },
				        {
				        	"name": "Swift",
				            "demand": 0,
				            "color": "#fe462a",
				            "icon": "http://vignette3.wikia.nocookie.net/ipod/images/0/01/Developer_swift_icon.png/revision/latest?cb=20140828235538"
				        },
				        {
				        	"name": "Objective-C",
				            "demand": 0,
				            "color": "#ad7745",
				            "icon": "http://2.bp.blogspot.com/-BuR1DpqQprU/U5CQ_0w2L7I/AAAAAAAABZY/H9wbfbO-kew/s1600/iOS_Objective_C.png"
				        },
				        {
				        	"name": "Perl",
				            "demand": 0,
				            "color": "#979797",
				            "icon": "https://st.pimg.net/perlweb/images/camel_head.v25e738a.png"
				        },
				        {
				        	"name": "Scala",
				            "demand": 0,
				            "color": "#e10000",
				            "icon": "http://www.yoppworks.com/wp-content/uploads/2016/05/Scala-Icon.png"
				        },
				        {
				        	"name": "PHP",
				            "demand": 0,
				            "color": "#6c7eb7",
				            "icon": "http://www.freelogovectors.net/wp-content/uploads/2012/12/PHP-logo.png"
				        },
				        {
				        	"name": "R",
				            "demand": 0,
				            "color": "#babcbf",
				            "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png"
				        }
			        ]
			    }


export default function chart(state = initState, action) {
  switch (action.type) {
	  case UPDATE_CHART:
	  	return Object.assign({}, state, {
	  		dataProvider: action.newData
	  	})
	  default:
	    return state;
  }
}