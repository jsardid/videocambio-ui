import React from "react";
import { connect } from "react-redux";
import { MovieDetail } from "./../components/MovieDetail";

export const MovieDetailContainer = props => (
  <MovieDetail
    movie={props.movies.moviesCollection[props.match.params.movieId]}
  />
);

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieDetailContainer);
