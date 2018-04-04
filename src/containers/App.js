import React from "react";
import { Main } from "./../components/Main";
import { Header } from "./../components/Header";
import { connect } from "react-redux";
import { fetchPopular, fetchNew } from "./../actions/actions";
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
    this.props.fetchNew();
    this.props.fetchPopular();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPopular: () => dispatch(fetchPopular()),
    fetchNew: () => dispatch(fetchNew())
  };
}

export default withRouter(connect(null, mapDispatchToProps)(App));
