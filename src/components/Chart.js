import React, {Component, ProtoTypes} from 'react';

require('../../vendor/amcharts');
require('../../vendor/serial');
require('../../vendor/dark');
require('amcharts3-react');

class Chart extends Component {
	render() {
		console.log(this.props)
		return(
			<AmCharts.React
	          type="serial"
	          theme="dark"
	          graphs={[{
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
	          }]}
	          dataProvider={[{
	            "name": "John",
	            "points": 35654,
	            "valie": 33300,
	            "color": "#7F8DA9",
	            "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
	        }, {
	            "name": "Damon",
	            "points": 65456,
	            "testing": 50000,
	            "color": "#FEC514",
	            "bullet": "https://www.myamcat.com/blog/wp-content/uploads/2016/02/job-icon.png",
	            "bullet2": "https://assets-cdn.github.com/images/modules/logos_page/Octocat.png"
	        }, {
	            "name": "Patrick",
	            "points": 45724,
	            "color": "#DB4C3C",
	            "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
	        }, {
	            "name": "Mark",
	            "points": 13654,
	            "color": "#DAF0FD",
	            "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
	        }]} />
		)
	}
}

export default Chart;