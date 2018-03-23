import React from "react";
import { Main } from "./../containers/Main";
import { connect } from "react-redux";
import { fetchData } from "./../actions/actions";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return <Main />;
  }

  componentDidMount() {
    this.props.fetchData();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  };
}

export default withRouter(connect(null, mapDispatchToProps)(App));
