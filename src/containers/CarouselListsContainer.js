import React from "react";
import { connect } from "react-redux";
import CarouselLists from "./../components/CarouselLists";

const CarouselListsContainer = props => {
  return (
    <CarouselLists
      isFetching={props.movies.isFetching}
      lists={[props.movies.data.popular, props.movies.data.new]}
    />
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(CarouselListsContainer);
