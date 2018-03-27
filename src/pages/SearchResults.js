import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieCarousel } from "./../components/MovieCarousel";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import removeAccents from "remove-accents";

class SearchResultsComponent extends Component {
  render() {
    return <MovieCarousel movies={this.getFilteredMovies()} />;
  }

  getFilteredMovies() {
    const parsed = queryString.parse(this.props.location.search);
    return parsed.query
      ? this.props.movies.data.popular.filter(movie => {
          return movie.title.toLowerCase().includes(parsed.query.toLowerCase());
        })
      : [];
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export const SearchResults = withRouter(
  connect(mapStateToProps)(SearchResultsComponent)
);
