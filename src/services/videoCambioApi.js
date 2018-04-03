import axios from "axios";
import { VIDEOCAMBIO_API_URL } from "./../constants/config";

export function getAllMovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies"
  }).then(data => {
    return data.data;
  });
}

export function getPopularMovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies?limit=20&sort_by=tmdb_popularity"
  }).then(data => {
    return data.data;
  });
}

export function getNewMovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies?limit=20&sort_by=tmdb_release_date"
  }).then(data => {
    return data.data;
  });
}

export function searchMovies(limit = 20, offset = 0, query = "") {
  return axios({
    method: "get",
    url:
      VIDEOCAMBIO_API_URL +
      "/movies?limit=" +
      limit +
      "&offset=" +
      offset +
      "&title=" +
      query +
      "&sort_by=tmdb_popularity"
  }).then(data => {
    return data.data;
  });
}

export function getMovie(movieID) {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies/" + movieID
  }).then(data => {
    return data.data;
  });
}
