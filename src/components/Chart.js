import React, {Component, ProtoTypes} from 'react';

require('../../vendor/amcharts');
require('../../vendor/serial');
require('../../vendor/dark');
require('amcharts3-react');

class Chart extends Component {
	compareData(a, b) {
	    let result = a.points > b.points ? -1 : 1
	    return result
	}

	render() {
		const {type, theme, categoryField, dataProvider, graphs} = this.props.chartData
		return(
			<AmCharts.React
	          type= {type}
	          theme= {theme}
	          graphs= {graphs}
	          dataProvider= {dataProvider.sort(this.compareData)}
	          categoryField= {categoryField}
	          autocolor= {true}
	          marginTop= {50}
	          startDuration= {2}
	        />
		)
	}
}

export default Chart;