import React from "react";
import styled from "styled-components";

const StyledPoster = styled.img`
  width: 100%;
  border: 3px solid white;
  box-shadow: 0px 0px 3px #000000;
  background-color: grey;
`;

export const Poster = props => <StyledPoster src={props.posterImgURL} />;
