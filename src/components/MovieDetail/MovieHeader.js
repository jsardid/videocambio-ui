import React from "react";
import styled from "styled-components";

const StyledMovieHeader = styled.div`
  width: 100%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0px 0px 5px #000000;
`;

const StyledTitle = styled.h1`
  margin: 0px;
  width: 100%;
  line-height: 0.9em;
`;

const StyledYear = styled.span`
  font-weight: 100;
  font-size: 0.6em;
`;

const StyledOriginalTitle = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: 1em;
`;

export const MovieHeader = props => (
  <StyledMovieHeader>
    <StyledTitle>
      {props.title} <StyledYear>({props.releaseYear})</StyledYear>
    </StyledTitle>
    <StyledOriginalTitle>{props.originalTitle}</StyledOriginalTitle>
  </StyledMovieHeader>
);
