import React from "react";
import { Main } from "./../components/Main";
import { Header } from "./../components/Header";
import { connect } from "react-redux";
import { fetchData } from "./../actions/actions";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
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
