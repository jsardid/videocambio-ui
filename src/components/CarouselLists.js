import React from "react";
import "./CarouselLists.css";
import { MovieCarousel } from "./../components/MovieCarousel";

const CarouselLists = props => {
  return (
    <div className="carousel-lists">
      {props.lists.map((list, i) => {
        return (
          list.movies.isFetched || <MovieCarousel
            key={i}
            isFetching={list.movies.isFetching}
            isFetched={list.movies.isFetched}
            movies={list.movies}
          />
        );
      })}
    </div>
  );
};

export default CarouselLists;
