import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class InputSearch extends Component {
  componentWillMount() {
    this.timer = null;
  }

  handleChange = e => {
    let searchValue = e.target.value;
    clearTimeout(this.timer);
    if (e.keyCode === ENTER_KEY) {
      this.triggerSearch(searchValue);
    } else {
      this.timer = setTimeout(() => {
        this.triggerSearch(searchValue);
      }, WAIT_INTERVAL);
    }
  };

  triggerSearch = value => {
    if (this.props.location.pathname === "/search") {
      this.props.history.replace("/search?query=" + value);
    } else {
      this.props.history.push("/search?query=" + value);
    }
  };

  render() {
    return <input type="text" onChange={this.handleChange} />;
  }
}

export default withRouter(InputSearch);
