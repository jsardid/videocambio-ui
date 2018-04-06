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
  height: 200px;
  width: 140px;
  background-color: #333;
`;

const ActorName = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e7e7eb;
  margin: 0px;
  padding: 10px;
  width: 120px;
  text-align: center;
  font-weight: bold;
  color: #14163c;
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
      swipeToSlide: true,
      lazyLoad: false,
      arrows: true
    };
    return (
      <Carousel>
        <CastTitle>Reparto</CastTitle>
        <Slider {...settings}>
          {this.props.cast.map((actor, i) => {
            return (
              <div>
                <ImgContainer key={i}>
                  <ActorImage
                    src={
                      "https://image.tmdb.org/t/p/w185/" +
                      actor.tmdb_profile_path
                    }
                  />
                  <ActorName>{actor.tmdb_name}</ActorName>
                </ImgContainer>
              </div>
            );
          })}
        </Slider>
      </Carousel>
    );
  }
}
