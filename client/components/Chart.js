import React, {Component, ProtoTypes} from 'react';

require('../../vendor/amcharts');
require('../../vendor/serial');
require('../../vendor/dark');
require('amcharts3-react');

class Chart extends Component {
	render() {
		const {type, theme, categoryField, dataProvider, graphs, valueAxes} = this.props.chartData
		return(
			<div>
				<AmCharts.React
		          type= {type}
		          theme= {theme}
		          graphs= {graphs}
		          dataProvider= {dataProvider}
		          categoryField= {categoryField}
		          valueAxes= {valueAxes}
		          autocolor= {true}
		          marginTop= {50}
		          startDuration= {2}
		        />
	        </div>
		)
	}
}

export default Chart;