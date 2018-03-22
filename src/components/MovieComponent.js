import React from "react";
import "./MovieComponent.css";

export const Movie = props => {
  return (
    <div>
      <img className="poster" src={"https://image.tmdb.org/t/p/w92/" + props.movie.poster_path} alt="poster"/>
    </div>
  );
};
