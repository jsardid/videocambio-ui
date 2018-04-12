import {
  FETCHING_POPULAR,
  FETCHING_POPULAR_SUCCESS,
  FETCHING_NEW,
  FETCHING_NEW_SUCCESS,
  FETCHING_MOVIE,
  FETCHING_MOVIE_SUCCESS,
  FETCHING_MOVIE_ERROR
} from "./../constants/constants";
import {
  requestPopularMovies,
  requestNewMovies,
  requestMovie
} from "./../services/videoCambioApi";

export function getPopular() {
  return {
    type: FETCHING_POPULAR
  };
}

export function getPopularSuccess(data) {
  return {
    type: FETCHING_POPULAR_SUCCESS,
    data
  };
}

export function getNew() {
  return {
    type: FETCHING_NEW
  };
}

export function getNewSuccess(data) {
  return {
    type: FETCHING_NEW_SUCCESS,
    data
  };
}

export function getMovie(movieId) {
  return {
    type: FETCHING_MOVIE,
    movieId: movieId
  };
}

export function getMovieSuccess(data) {
  return {
    type: FETCHING_MOVIE_SUCCESS,
    data
  };
}

export function getMovieError(movieId, error) {
  return {
    type: FETCHING_MOVIE_ERROR,
    error,
    movieId
  };
}

export function fetchPopular() {
  return dispatch => {
    dispatch(getPopular());
    requestPopularMovies()
      .then(data => {
        dispatch(getPopularSuccess(data));
      })
      .catch(err => console.log("err:", err));
  };
}

export function fetchNew() {
  return dispatch => {
    dispatch(getNew());
    requestNewMovies()
      .then(data => {
        dispatch(getNewSuccess(data));
      })
      .catch(err => console.log("err:", err));
  };
}

export function fetchMovie(movieId) {
  return dispatch => {
    dispatch(getMovie(movieId));
    requestMovie(movieId)
      .then(data => {
        dispatch(getMovieSuccess(data));
      })
      .catch(err => {
        dispatch(getMovieError(movieId, err));
      });
  };
}
