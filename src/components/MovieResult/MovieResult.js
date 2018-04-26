import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Img from "react-image";

const MovieLinkContainer = styled.div`
  text-align: center;
  height: 150px;
  @media only screen and (min-width: 600px) {
    height: 300px;
  }
`;
const changeColor = keyframes`
    0%   {background-color: #555;}
    50%  {background-color: #222;}
    100% {background-color: #555;}
`;

const Poster = styled(Img)`
  height: 150px;
  width: 100px;
  @media only screen and (min-width: 600px) {
    height: 300px;
    width: 200px;
  }
`;

const Loading = styled.div`
  height: 150px;
  width: 100px;
  animation: ${changeColor} 2s linear infinite;
  @media only screen and (min-width: 600px) {
    height: 300px;
    width: 200px;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
`;

export const MovieResult = props => {
  return (
    <MovieLinkContainer>
      <StyledLink to={"/movies/" + props.movie.tmdb_id}>
        <Poster
          src={
            "https://image.tmdb.org/t/p/w300/" + props.movie.tmdb_poster_path
          }
          alt="poster"
          loader={<Loading />}
          onLoad={() => window.dispatchEvent(new Event("resize"))} // Fix for react slick
        />
      </StyledLink>
    </MovieLinkContainer>
  );
};
