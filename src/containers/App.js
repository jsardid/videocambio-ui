import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchData } from "./../actions/actions";
import { MovieCarousel } from "./../components/MovieCarouselComponent";

const App = props => {
  return (
    <div className="container">
      <p className="text">Redux Examples</p>
      <button className="button" onClick={() => props.fetchData()}>
        <p className="buttonText">Load Data</p>
      </button>
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
    </div>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
