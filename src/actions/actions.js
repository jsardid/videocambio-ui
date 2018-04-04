import {
  FETCHING_POPULAR,
  FETCHING_POPULAR_SUCCESS,
  FETCHING_NEW,
  FETCHING_NEW_SUCCESS
} from "./../constants/constants";
import { getPopularMovies, getNewMovies } from "./../services/videoCambioApi";

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

export function fetchPopular() {
  return dispatch => {
    dispatch(getPopular());
    getPopularMovies()
      .then(data => {
        dispatch(getPopularSuccess(data));
      })
      .catch(err => console.log("err:", err));
  };
}

export function fetchNew() {
  return dispatch => {
    dispatch(getNew());
    getNewMovies()
      .then(data => {
        dispatch(getNewSuccess(data));
      })
      .catch(err => console.log("err:", err));
  };
}
