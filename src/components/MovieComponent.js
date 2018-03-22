import React from "react";
import "./MovieComponent.css";
import { Link } from "react-router-dom";

export const Movie = props => {
  return (
    <div>
      <Link to={"/movies/"+props.movie.id}>
        <img
          className="poster"
          src={"https://image.tmdb.org/t/p/w92/" + props.movie.poster_path}
          alt="poster"
        />
      </Link>
    </div>
  );
};
