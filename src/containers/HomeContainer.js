import React from "react";
import { connect } from "react-redux";
import Home from "./../components/Home/Home";
import { fetchPopular, fetchNew } from "./../actions/actions";

class HomeContainer extends React.Component {
  render() {
    return (
      <Home
        lists={[
          {
            carouselTitle: "Populares",
            movies: this.props.movies.popularIndex.index.map(
              movie => this.props.movies.moviesCollection[movie]
            ),
            status: this.props.movies.popularIndex.status
          },
          {
            carouselTitle: "Recientes",
            movies: this.props.movies.newIndex.index.map(
              movie => this.props.movies.moviesCollection[movie]
            ),
            status: this.props.movies.newIndex.status
          }
        ]}
      />
    );
  }

  componentDidMount() {
    this.props.movies.newIndex.status === "fetched" || this.props.fetchNew();
    this.props.movies.popularIndex.status === "fetched" ||
      this.props.fetchPopular();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPopular: () => dispatch(fetchPopular()),
    fetchNew: () => dispatch(fetchNew())
  };
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
