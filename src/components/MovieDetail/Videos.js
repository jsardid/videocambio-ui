import React from "react";
import styled from "styled-components";

const VideosSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// CSS hack to simulate auto height on youtube iframe 
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`;

const StyledVideo = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const VideosTitle = styled.h3`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Videos = props => (
  <VideosSection>
    <VideosTitle>Trailer</VideosTitle>
    <VideoWrapper>
      <StyledVideo
        src={props.videoURL}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </VideoWrapper>
  </VideosSection>
);
