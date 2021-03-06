import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ChartActions from '../actions/ChartActions'
import Footer from '../components/Footer';
import Chart from '../components/Chart'
import Buttons from '../components/Buttons'

export class App extends Component {
  componentWillMount() {
    const {valueField} = this.props.chart.graphs[0]
    this.props.actions.loadData(valueField)
  }

  render() {
    const { chart, actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="title"><span className="light">Dev</span>Stats</div>
        <div className="subtitle">Compare programming languages in terms of market demand, community size & amount of availble Q&A</div>
        <Buttons actions={actions} />
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
