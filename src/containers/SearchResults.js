import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieCarousel } from "./../components/MovieCarousel";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import diacritics from "diacritics";
const removeDiacritics = diacritics.remove;

class SearchResultsComponent extends Component {
  render() {
    return <MovieCarousel movies={this.getFilteredMovies()} />;
  }

  getFilteredMovies() {
    const parsed = queryString.parse(this.props.location.search);
    return parsed.query
      ? Object.keys(this.props.movies.moviesCollection)
          .map(movieID => this.props.movies.moviesCollection[movieID])
          .filter(movie =>
            removeDiacritics(movie.tmdb_title)
              .toLowerCase()
              .includes(removeDiacritics(parsed.query).toLowerCase())
          )
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