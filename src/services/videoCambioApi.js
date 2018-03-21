import axios from "axios";
import { VIDEOCAMBIO_API_URL } from "./../constants/config";

export function getAllmovies() {
  return axios({
    method: "get",
    url: VIDEOCAMBIO_API_URL + "/movies"
  }).then(data => {
    return data.data;
  });
}
