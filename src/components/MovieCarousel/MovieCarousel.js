import React, { Component } from "react";
import Slider from "react-slick";
import "./customSlick.css";
import { MovieResult } from "./../MovieResult/MovieResult";
import styled, { keyframes } from "styled-components";
import Spinner from "react-spinkit";

const Carousel = styled.div`
  width: 100%;
  margin-top: 30px;
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
  background-color: #00000057;
  box-shadow: 0px 0px 10px #000000;
`;
const changeColor = keyframes`
    0%   {background-color: #00000045;}
    50%  {background-color: #00000099;}
    100% {background-color: #00000045;}
`;

const SpinnerContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${changeColor} 2s linear infinite;
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
