import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { Poster } from "./Poster";
import { Overview } from "./Overview";
import { MovieHeader } from "./MovieHeader";
import { Videos } from "./Videos";
import { Cast } from "./Cast";

const BackgroundImage = styled.div`
  background-image: ${props => "url(" + props.backdropImgURL + ")"};
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #484a76;
`;

const BackgroundGradient = styled.div`
  width: 100%;
  background: linear-gradient(
    rgb(20, 22, 60, 0.3) 50px,
    rgb(20, 22, 60, 1) 700px
  );
  display: flex;
  justify-content: center;
`;

const Content = styled(Flex)`
  background: rgba(0, 0, 0, 0.5);
`;

const MovieHeaderLayout = styled(Flex)`
  height: 300px;
`;

const VideoLayout = styled(Flex)`
  height: 500px;
  width: 800px;
`;

export const MovieDetail = props => {
  return !props || Object.keys(props).length === 0 ? (
    <h1>fetching</h1>
  ) : (
    <BackgroundImage backdropImgURL={props.backdropImgURL}>
      <BackgroundGradient>
        <Content flexWrap="wrap" width={3 / 5} p="40px" mt="400px">
          <Box width={1 / 3} mt="-200px">
            <Poster posterImgURL={props.posterImgURL} />
          </Box>
          <Box width={2 / 3} pl="30px">
            <MovieHeaderLayout
              flexDirection="column"
              justifyContent="flex-end"
              mt="-350px"
              mb="50px"
            >
              <MovieHeader
                title={props.title}
                originalTitle={props.originalTitle}
                releaseYear={props.releaseYear}
              />
            </MovieHeaderLayout>
            <Overview overview={props.overview} />
          </Box>
          <Box width={1} mt="30px">
            <Cast cast={props.cast} />
          </Box>
          <VideoLayout mt="40px" mb="100px">
            <Videos videoURL={props.videoURL} />
          </VideoLayout>
        </Content>
      </BackgroundGradient>
    </BackgroundImage>
  );
};
