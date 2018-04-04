import React from "react";
import { connect } from "react-redux";
import CarouselLists from "./../components/CarouselLists";

const CarouselListsContainer = props => {
  return (
    <CarouselLists
      lists={[
        {
          movies: props.movies.popularIndex.index.map(
            movie => props.movies.moviesCollection[movie]
          ),
          isFetched: props.movies.popularIndex.isFetched,
          isFetching: props.movies.popularIndex.isFetching
        },
        {
          movies: props.movies.newIndex.index.map(
            movie => props.movies.moviesCollection[movie]
          ),
          isFetched: props.movies.newIndex.isFetched,
          isFetching: props.movies.newIndex.isFetching
        }
      ]}
    />
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(CarouselListsContainer);
