import React, { Component } from "react";
import Slider from "react-slick";
import "./movieCarouselComponent.css";
import { Movie } from "./MovieComponent";

export class MovieCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      adaptiveHeight: true,
      swipeToSlide: true,
      lazyLoad: true,
      arrows: true
    };
    return (
      <div className="carousel">
        {this.props.isFetching && <p>Loading</p>}
        {this.props.movies.length ? (
          <div>
            <Slider {...settings}>
              {this.props.movies.slice(0, 20).map((movie, i) => {
                return (
                  <div>
                    <Movie key={i} movie={movie} />
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : null}
      </div>
    );
  }
}
