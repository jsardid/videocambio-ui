import React from "react";
import styled, { keyframes } from "styled-components";
import Img from "react-image";

const StyledPoster = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid white;
  box-shadow: 0px 0px 3px #000000;
  background-color: grey;
  overflow: hidden;
`;

const changeColor = keyframes`
    0%   {background-color: #555;}
    50%  {background-color: #222;}
    100% {background-color: #555;}
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  animation: ${changeColor} 2s linear infinite;
`;

export const Poster = props => (
  <Container>
    <StyledPoster src={props.posterImgURL} alt="poster" loader={<Loading />} />
  </Container>
);
