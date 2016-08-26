import {  } from '../constants/ActionTypes';

let initState = {	categoryField: "name",
					type: "serial",
					theme: "dark",
					graphs: [{
						"balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
						"bulletOffset": 10,
						"bulletSize": 52,
						"colorField": "color",
						"cornerRadiusTop": 8,
						"customBulletField": "bullet",
						"fillAlphas": 0.8,
						"lineAlpha": 0,
						"type": "column",
						"valueField": "points"
			        }],
			        dataProvider: [
			        {
			            "name": "Java",
			            // "points": 35654,
			            // "valie": 33300,
			            // "color": "#7F8DA9",
			            // "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
			        },
			        {
			        	"name": "JavaScript"
			        },
			        {
			        	"name": "Python"
			        },
			        {
			        	"name": "Ruby"
			        },
			        {
			        	"name": "C++"
			        },
			        {
			        	"name": "C"
			        },
			        {
			        	"name": "C#"
			        },
			        {
			        	"name": "Swift"
			        },
			        {
			        	"name": "Objective-C"
			        },
			        {
			        	"name": "Perl"
			        },
			        {
			        	"name": "Scala"
			        },
			        {
			        	"name": "Shell"
			        },
			        {
			        	"name": "PHP"
			        },
			        {
			        	"name": "R"
			        }
			        ]
			    }


export default function chart(state = initState, action) {
  switch (action.type) {
  // case INCREMENT_COUNTER:
  //   return state + 1;
  // case DECREMENT_COUNTER:
  //   return state - 1;
  default:
    return state;
  }
}
