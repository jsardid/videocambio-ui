import React from "react";

export const MovieDetail = props => {
  if (props.isFetching) {
    return <h1>fetching</h1>;
  }
  return <h1>{props && props.movie && props.movie.tmdb_id}</h1>;
};
