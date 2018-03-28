import React, { Component } from "react";
import { connect } from "react-redux";
import { MovieDetail } from "./../components/MovieDetail";

export const MovieDetailContainer = props => (
  <MovieDetail
    isFetching={props.movies.isFetching}
    movie={props.movies.data.moviesCollection[props.match.params.movieId]}
  />
);

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieDetailContainer);
