import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChartActions from '../actions/ChartActions'
import Footer from '../components/Footer';
import Chart from '../components/Chart'

export class App extends Component {
  componentWillMount() {
    const {valueField} = this.props.chart.graphs[0]
    this.props.actions.loadData(valueField)
  }

  render() {
    const { chart, actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">TechStats</div>
        <img id="stackoverflow" src="http://goo.gl/LkwMMo" onClick={() => this.props.actions.loadData("questions")} />
        <img id="indeed" src="http://goo.gl/1xRiQ7" onClick={() => this.props.actions.loadData("demand")}/>
        <Chart chartData={chart} actions={actions} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chart: state.chart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ChartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
