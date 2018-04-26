import React, { Component } from "react";
import Slider from "react-slick";
import "./customSlick.css";
import styled from "styled-components";

const CastTitle = styled.h3`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const Carousel = styled.div`
  width: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #0000004a;
  flex-direction: column;
`;

const ActorImage = styled.img`
  background-color: #ffffff8c;
  height: 150px;
  width: 100px;
  @media only screen and (min-width: 600px) {
    height: 200px;
    width: 130px;
  }
`;

const ActorName = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  background-color: #ffffff14;
  margin: 0px;
  padding: 10px;
  width: 80px;
  height: 32px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media only screen and (min-width: 600px) {
    width: 110px;
  }

`;

export class Cast extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      adaptiveHeight: true,
      lazyLoad: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <Carousel>
        <CastTitle>Reparto</CastTitle>
        <Slider {...settings}>
          {this.props.cast.map((actor, i) => {
            return (
              <div>
                <ImgContainer key={i}>
                  <ActorImage src={actor.imgURL} />
                  <ActorName>
                    <span>{actor.name}</span>
                  </ActorName>
                </ImgContainer>
              </div>
            );
          })}
        </Slider>
      </Carousel>
    );
  }
}
