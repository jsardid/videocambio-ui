import React from "react";
import styled from "styled-components";

const VideosSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledVideo = styled.iframe`
  flex-grow: 1;
  width: 100%;
`;

const VideosTitle = styled.h3`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Videos = props => (
  <VideosSection>
    <VideosTitle>Trailer</VideosTitle>
    <StyledVideo
      src={props.videoURL}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </VideosSection>
);
