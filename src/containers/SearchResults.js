import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieList } from "./../components/MovieList/MovieList";
import { withRouter } from "react-router-dom";
import qs from "qs";
import { search } from "./../actions/actions";
import { Flex } from "grid-styled";
import Spinner from "react-spinkit";

class SearchResultsComponent extends Component {
  render() {
    return this.props.movies.search.isSearching ? (
      <div>
        <Flex width={1} justifyContent="center" mt="150px">
          <Spinner name="line-scale" color="#ffffff5c" fadeIn="quarter" />
        </Flex>
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
    const oldParsedParameters = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
    const newParsedParameters = qs.parse(newProps.location.search, {
      ignoreQueryPrefix: true
    });
    if (oldParsedParameters.query !== newParsedParameters.query) {
      this.props.search(newParsedParameters.query);
    }
  }

  componentDidMount() {
    const parsedURLParameters = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    });
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
