import React from "react";
import { connect } from "react-redux";
import { MovieDetail } from "./../components/MovieDetail/MovieDetail";
import { fetchMovie } from "./../actions/actions";

class MovieDetailContainer extends React.Component {
  render() {
    return <MovieDetail {...this.getMovieProps()} />;
  }

  getMovieProps() {
    let movieStatus = !this.props.movies.moviesStatus[
      this.props.match.params.movieId
    ]
      ? "notFetched"
      : this.props.movies.moviesStatus[this.props.match.params.movieId].status;

    let movie = this.props.movies.moviesCollection[
      this.props.match.params.movieId
    ];

    return {
      status: movieStatus,
      movie:
        movieStatus === "fetched"
          ? {
              title: movie.tmdb_title,
              originalTitle: movie.tmdb_original_title,
              releaseYear: movie.tmdb_release_date.substring(0, 4),
              overview: movie.tmdb_overview,
              cast: movie.tmdb_cast.map(cast => ({
                name: cast.tmdb_name,
                character: cast.tmdb_character,
                imgURL: cast.tmdb_profile_path
                  ? "https://image.tmdb.org/t/p/w185/" + cast.tmdb_profile_path
                  : null
              })),
              videoURL:
                movie.tmdb_videos && movie.tmdb_videos.length
                  ? "https://www.youtube.com/embed/" +
                    movie.tmdb_videos[0].tmdb_video_key +
                    "?rel=0&amp;showinfo=0"
                  : null,
              posterImgURL: movie.tmdb_poster_path
                ? "https://image.tmdb.org/t/p/w500/" + movie.tmdb_poster_path
                : null,
              backdropImgURL: movie.tmdb_backdrop_path
                ? "https://image.tmdb.org/t/p/w1280/" + movie.tmdb_backdrop_path
                : null
            }
          : null
    };
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
