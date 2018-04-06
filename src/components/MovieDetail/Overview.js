import React from "react";
import styled from "styled-components";

const StyledInformation = styled.div`
  width: 100%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledOverview = styled.p`
  width: 100%;
  line-height: 20px;
`;

export const Overview = props => (
  <StyledInformation>
    <h3>Sinopsis</h3>
    <StyledOverview>{props.overview}</StyledOverview>
  </StyledInformation>
);
