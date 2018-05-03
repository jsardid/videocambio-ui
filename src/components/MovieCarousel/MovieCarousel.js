import React, { Component } from "react";
import Slider from "react-slick";
import "./customSlick.css";
import { MovieResult } from "./../MovieResult/MovieResult";
import styled, { keyframes } from "styled-components";
import Spinner from "react-spinkit";

const Carousel = styled.div`
  width: 100%;
  margin-top: 0px;
  padding: 10px 0px 20px 0px;
`;

const CarouselTitle = styled.h3`
  padding-left: 20px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0px 0px 10px #000000;
  font-weight: 100;
  margin-bottom: 10px;
`;

const SliderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 10px #000000;
`;
const changeColor = keyframes`
    0%   {background-color: rgba(0, 0, 0, 0.15);}
    50%  {background-color: rgba(0, 0, 0, 0.6);}
    100% {background-color: rgba(0, 0, 0, 0.15);}
`;

const SpinnerContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${changeColor} 2s linear infinite;
  @media only screen and (min-width: 600px) {
    height: 300px;
  }

`;

export class MovieCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      adaptiveHeight: true,
      swipeToSlide: false,
      lazyLoad: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1650,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <Carousel>
        <CarouselTitle>{this.props.carouselTitle}</CarouselTitle>
        <SliderContainer>
          {this.props.status === "fetching" ? (
            <SpinnerContainer>
              <Spinner name="ball-beat" color="#ffffff5c" fadeIn="quarter" />
            </SpinnerContainer>
          ) : (
            <div>
              <Slider {...settings}>
                {this.props.movies.map((movie, i) => {
                  return (
                    <div key={i}>
                      <MovieResult movie={movie} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          )}
        </SliderContainer>
      </Carousel>
    );
  }
}
