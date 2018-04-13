import axios from "axios";
import { VIDEOCAMBIO_API_URL } from "./../constants/config";

export function requestAllMovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies"
  }).then(data => {
    return data.data;
  });
}

export function requestPopularMovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies?limit=20&sort_by=tmdb_popularity"
  }).then(data => {
    return data.data;
  });
}

export function requestNewMovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies?limit=20&sort_by=tmdb_release_date"
  }).then(data => {
    return data.data;
  });
}

export function requestSearch(query = "", limit = 0, offset = 0) {
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

export function requestMovie(movieID) {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies/" + movieID
  }).then(data => {
    return data.data;
  });
}
