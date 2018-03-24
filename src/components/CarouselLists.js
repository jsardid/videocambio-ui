import React from "react";
import "./CarouselLists.css";
import { MovieCarousel } from "./../components/MovieCarousel";

const CarouselLists = props => {
  return (
    <div className="mainContent">
      {props.lists.map((list, i) => {
        return (
          <MovieCarousel
            key={i}
            isFetching={props.isFetching}
            movies={list}
          />
        );
      })}
    </div>
  );
};

export default CarouselLists;
