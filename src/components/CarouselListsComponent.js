import React from "react";
import "./CarouselListsComponent.css";
import { connect } from "react-redux";
import { MovieCarousel } from "./../components/MovieCarouselComponent";

const CarouselLists = props => {
  return (
    <div className="mainContent">
      <MovieCarousel
        isFetching={props.movies.isFetching}
        movies={props.movies.data.popular}
      />
      <MovieCarousel
        isFetching={props.movies.isFetching}
        movies={props.movies.data.new}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(CarouselLists);
