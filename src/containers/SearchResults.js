import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieList } from "./../components/MovieList/MovieList";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { search } from "./../actions/actions";
var Spinner = require("react-spinkit");

class SearchResultsComponent extends Component {
  render() {
    return this.props.movies.search.isSearching ? (
      <div>
        <Spinner name="line-scale" color="white" fadeIn="quarter"/>
        <h1 style={{ color: "white" }}>Searching</h1>
      </div>
    ) : this.props.movies.search.resultsIndex.length === 0 ? (
      <h1 style={{ color: "white" }}>Empty results</h1>
    ) : (
      <MovieList
        movies={this.props.movies.search.resultsIndex.map(
          movie => this.props.movies.moviesCollection[movie]
        )}
      />
    );
  }

  componentWillReceiveProps(newProps) {
    const oldParsedParameters = queryString.parse(this.props.location.search);
    const newParsedParameters = queryString.parse(newProps.location.search);
    if (oldParsedParameters.query !== newParsedParameters.query) {
      this.props.search(newParsedParameters.query);
    }
  }

  componentDidMount() {
    const parsedURLParameters = queryString.parse(this.props.location.search);
    this.props.search(parsedURLParameters.query);
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search: query => dispatch(search(query))
  };
}

export const SearchResults = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent)
);
