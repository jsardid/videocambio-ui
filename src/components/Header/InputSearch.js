import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Icon from "material-ui/Icon";
import styled from "styled-components";

const WAIT_INTERVAL = 750;
const ENTER_KEY = 13;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px 10px;
`;

const SearchIcon = styled(Icon)`
  width: 30px;
  position: relative;
  left: -30px;
`;

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
      <SearchContainer>
        <SearchInput type="text" placeholder="Buscar películas por título" onKeyUp={this.handleChange} />
        <SearchIcon>search</SearchIcon>
      </SearchContainer>
    );
  }
}

export default withRouter(InputSearch);
