import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { Poster } from "./Poster";
import { Information } from "./Information";

const BackgroundImage = styled.div`
  background-image: ${props => "url(" + props.backgroundImage + ")"};
  background-size: cover;
  background-position:  center;
  background-color: #484a76;
`;

const BackgroundGradient = styled.div`
  height: 700px;
  width: 100%;
  background: linear-gradient(rgb(20, 22, 60, 0.3) 30%, rgb(20, 22, 60, 1) 80%);
  display: flex;
  justify-content: center;
`;

const Content = styled(Flex)`
  background: rgb(20, 22, 60, 1);
`;

export const MovieDetail = props => {
  if (props.isFetching || !props || !props.movie) {
    return <h1>fetching</h1>;
  }
  return (
    <BackgroundImage
      backgroundImage={
        "https://image.tmdb.org/t/p/original/" + props.movie.tmdb_backdrop_path
      }
    >
      <BackgroundGradient>
        <Content flexWrap="wrap" width={3/5} p="40px" mt="400px">
          <Box width={1/3} mt="-200px">
            <Poster imageURL={props.movie.tmdb_poster_path}/>
          </Box>
          <Box width={2/3} pl="20px" mt="-100px">
            <Information title={props.movie.tmdb_title} overview={props.movie.tmdb_overview}/>
          </Box>
        </Content>
      </BackgroundGradient>
    </BackgroundImage>
  );
};
