import React, { Component } from "react";
import Slider from "react-slick";
import "./MovieCarousel.css";
import { MovieResult } from "./MovieResult";

export class MovieCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 1,
      adaptiveHeight: true,
      swipeToSlide: true,
      lazyLoad: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 9
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 8
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3
          }
        }
      ]
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
                    <MovieResult key={i} movie={movie} />
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
