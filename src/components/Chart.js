import React, {Component, ProtoTypes} from 'react';

require('../../vendor/amcharts');
require('../../vendor/serial');
require('../../vendor/dark');
require('amcharts3-react');

class Chart extends Component {
	render() {
		const {type, theme, categoryField, dataProvider, graphs} = this.props.chartData
		return(
			<AmCharts.React
	          type= {type}
	          theme= {theme}
	          graphs= {graphs}
	          dataProvider= {dataProvider} 
	          categoryField= {categoryField}
	          />
		)
	}
}

export default Chart;