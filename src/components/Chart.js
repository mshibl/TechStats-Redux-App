import React, {Component, ProtoTypes} from 'react';

require('../../vendor/amcharts');
require('../../vendor/serial');
require('../../vendor/dark');
require('amcharts3-react');

class Chart extends Component {
	componentDidMount() {
		const {dataProvider} = this.props.chartData
		this.props.actions.loadData(dataProvider)
	}

	sortData(a, b) {
	    let result = a.demand > b.demand ? -1 : 1
	    return result
	}

	componentWillReceiveProps(nextProps) {
	 	this.setState({
	 		chartData: nextProps.chartData.dataProvider.sort(this.sortData)
	 	})     
	}

	render() {
		const {type, theme, categoryField, dataProvider, graphs} = this.props.chartData
		return(
			<AmCharts.React
	          type= {type}
	          theme= {theme}
	          graphs= {graphs}
	          dataProvider= {dataProvider.sort(this.sortData)}
	          categoryField= {categoryField}
	          autocolor= {true}
	          marginTop= {50}
	          startDuration= {2}
	        />
		)
	}
}

export default Chart;