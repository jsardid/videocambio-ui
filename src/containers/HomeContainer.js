import React from "react";
import { connect } from "react-redux";
import CarouselLists from "./../components/CarouselLists";
import { fetchPopular, fetchNew } from "./../actions/actions";

class HomeContainer extends React.Component {
  render() {
    return (
      <CarouselLists
        lists={[
          {
            carouselTitle: "Populares",
            movies: this.props.movies.popularIndex.index.map(
              movie => this.props.movies.moviesCollection[movie]
            ),
            isFetched: this.props.movies.popularIndex.isFetched,
            isFetching: this.props.movies.popularIndex.isFetching
          },
          {
            carouselTitle: "Recientes",
            movies: this.props.movies.newIndex.index.map(
              movie => this.props.movies.moviesCollection[movie]
            ),
            isFetched: this.props.movies.newIndex.isFetched,
            isFetching: this.props.movies.newIndex.isFetching
          }
        ]}
      />
    );
  }

  componentDidMount() {
    this.props.movies.newIndex.isFetched || this.props.fetchNew();
    this.props.movies.popularIndex.isFetched || this.props.fetchPopular();
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
