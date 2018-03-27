import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Icon from "material-ui/Icon";
import "./InputSearch.css";

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
    if (!value) {
      this.props.history.push("" + value);
    } else {
      if (this.props.location.pathname === "/search") {
        this.props.history.replace("/search?query=" + value);
      } else {
        this.props.history.push("/search?query=" + value);
      }
    }
  };

  render() {
    return (
      <div className="search">
        <input
          className="input-search"
          type="text"
          onChange={this.handleChange}
        />
        <Icon className="search-icon">search</Icon>
      </div>
    );
  }
}

export default withRouter(InputSearch);
