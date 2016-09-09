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
        <div className="title"><span className="light">Dev</span>Stats</div>
        <div className="subtitle">Compare programming languages in terms of job demand, community size & amount of Q&A</div>
        <div className="main-buttons">
          <div id="stackoverflow">
            <button type="button" className="btn btn-info"
                    onClick={() => this.props.actions.loadData("demand")}>
              <div className="text">Number of Jobs</div>
              <div className="hidden-text">
                <img src="http://res.cloudinary.com/shibl/image/upload/c_scale,w_15/v1473395068/jj2z8DZ-Z5rV-Y4IY0ZklkuPjCchjeeisflFD0dU_zlJNpbUJkDTQpAMlc5rwutKFSU_w300_ixdwl3.png"></img>
                &nbsp; Data from Indeed!
              </div>
            </button>
            <button type="button" className="btn btn-info"
                    onClick={() => this.props.actions.loadData("questions")}>
              <div className="text">Availble Support and Q&A</div>
              <div className="hidden-text">
                <img src="http://res.cloudinary.com/shibl/image/upload/c_scale,w_15/v1473395366/icon-stackoverflow_nejhzt.png"></img>
                &nbsp; Data from StackOverflow!
              </div>
            </button>
            {/* <img src="http://goo.gl/LkwMMo" onClick={() => this.props.actions.loadData("questions")} /> */}
          </div>
          <div id="indeed">
            {/* <img src="http://goo.gl/1xRiQ7" onClick={() => this.props.actions.loadData("demand")}/> */}
          </div>
        </div>
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
