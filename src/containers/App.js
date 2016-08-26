import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Chart from '../components/Chart'

export class App extends Component {
  componentDidMount() {   
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">TechStats</div>
        <Chart actions={actions} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
