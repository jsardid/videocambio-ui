import React from "react";
import { connect } from "react-redux";
import { MovieDetail } from "./../components/MovieDetail";
import { fetchMovie } from "./../actions/actions";

class MovieDetailContainer extends React.Component {
  render() {
    return (
      <MovieDetail
        movie={
          this.props.movies.moviesCollection[this.props.match.params.movieId]
        }
      />
    );
  }

  componentDidMount() {
    this.props.movies.moviesCollection[this.props.match.params.movieId] ||
      this.props.fetchMovie(this.props.match.params.movieId);
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MovieDetailContainer
);
