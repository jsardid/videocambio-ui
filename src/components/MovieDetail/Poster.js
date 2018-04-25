import React from "react";
import styled from "styled-components";

const StyledPoster = styled.img`
  width: 100%;
  background-color: grey;
  display: block;
`;

const Container = styled.div`
  border: 3px solid white;
  box-shadow: 0px 0px 3px #000000;
`;

export const Poster = props => (
  <Container>
    <StyledPoster src={props.posterImgURL} />
  </Container>
);
