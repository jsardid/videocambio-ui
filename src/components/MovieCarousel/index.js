import React, { Component } from "react";
import Slider from "react-slick";
import "./customSlick.css";
import { MovieResult } from "./MovieResult";
import styled from "styled-components";

const Carousel = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 10px 0px 20px 0px;
  background-color: rgba(0, 0, 0, 0.35);
`;

const CarouselTitle = styled.h3`
  padding-left: 20px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

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
      <Carousel>
        {this.props.isFetching && <p>Loading</p>}
        {this.props.movies.length ? (
          <div>
            <CarouselTitle>{this.props.carouselTitle}</CarouselTitle>
            <Slider {...settings}>
              {this.props.movies.slice(0, 20).map((movie, i) => {
                return (
                  <div key={i}>
                    <MovieResult movie={movie} />
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : null}
      </Carousel>
    );
  }
}
