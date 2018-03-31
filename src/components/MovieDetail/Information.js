import React from "react";
import styled from "styled-components";

const StyledInformation = styled.div`
  width: 100%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledTitle = styled.h1`
  margin: 0px;
  width: 100%;
  padding: 10px;
  text-shadow: 0px 0px 5px #000000;
`;

const StyledOverview = styled.p`
  width: 100%;
  padding: 10px;
  font-size: 0.8em;
  line-height: 20px;
`;

export const Information = props => (
  <StyledInformation>
    <StyledTitle>{props.title}</StyledTitle>
    <StyledOverview>{props.overview}</StyledOverview>
  </StyledInformation>
);
