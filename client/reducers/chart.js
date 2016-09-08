import { UPDATE_CHART } from '../constants/ActionTypes';

let initState = {	
					categoryField: "name",
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
					dataProvider: []
			    }


export default function chart(state = initState, action) {
  switch (action.type) {
	  case UPDATE_CHART:
	  	return Object.assign({}, state, {
	  		dataProvider: action.newChartData,
	  		graphs: action.newGraphsData
	  	})
	  default:
	    return state;
  }
}
