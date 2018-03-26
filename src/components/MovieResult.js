import React from "react";
import "./MovieResult.css";
import { Link } from "react-router-dom";

export const MovieResult = props => {
  return (
    <div className="movie-link-container">
      <Link className="movie-link" to={"/movies/"+props.movie.id}>
        <img
          className="poster"
          src={"https://image.tmdb.org/t/p/w154/" + props.movie.poster_path}
          alt="poster"
        />
      </Link>
    </div>
  );
};
