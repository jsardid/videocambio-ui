import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import { Poster } from "./Poster";
import { Overview } from "./Overview";
import { MovieHeader } from "./MovieHeader";
import { Videos } from "./Videos";
import { Cast } from "./Cast";
import Spinner from "react-spinkit";

export const MovieDetail = props => {
  return props.status === "fetched" ? (
    <BackgroundImage backdropImgURL={props.movie.backdropImgURL}>
      <BackgroundGradient>
        <Content>
          <FirstRow>
            <MovieHeaderTopLayout>
              <MovieHeader
                title={props.movie.title}
                originalTitle={props.movie.originalTitle}
                releaseYear={props.movie.releaseYear}
              />
            </MovieHeaderTopLayout>

            <PosterLayout>
              <Poster posterImgURL={props.movie.posterImgURL} />
            </PosterLayout>
            <MovieInfo>
              <MovieHeaderLayout>
                <MovieHeader
                  title={props.movie.title}
                  originalTitle={props.movie.originalTitle}
                  releaseYear={props.movie.releaseYear}
                />
              </MovieHeaderLayout>
              <Overview overview={props.movie.overview} />
            </MovieInfo>
          </FirstRow>
          <Cast cast={props.movie.cast} />
          <Videos videoURL={props.movie.videoURL} />
        </Content>
      </BackgroundGradient>
    </BackgroundImage>
  ) : props.status === "fetching" ? (
    <Flex width={1} justifyContent="center" mt="150px">
      <Spinner name="line-scale" color="#ffffff5c" fadeIn="quarter" />
    </Flex>
  ) : props.status === "error" ? (
    <div> Error </div>
  ) : null;
};

const BackgroundImage = styled.div`
  background-image: ${props => "url(" + props.backdropImgURL + ")"};
  background-repeat: no-repeat;
  background-position: top;
  background-color: #484a76;
  background-size: 300% auto;
  @media only screen and (min-width: 600px) {
    background-size: 200% auto;
  }
  @media only screen and (min-width: 900px) {
    background-size: 150% auto;
  }
  @media only screen and (min-width: 1200px) {
    background-size: 100% auto;
  }
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

const Content = styled.div`
  align-items: center;
  padding: 40px;
  margin-top: 400px;
  background: rgba(0, 0, 0, 0.5);
  width: 75%;
  max-width: 1000px;
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PosterLayout = styled.div`
  width: 250px;
  @media only screen and (min-width: 600px) {
    margin-top: -200px;
    width: 300px;
  }
`;

const MovieInfo = styled.div`
  width: 100%;
  margin-top: 30px;
  @media only screen and (min-width: 600px) {
    margin-top: initial;
    margin-left: 30px;
    width: 300px;
    flex-grow: 1;
  }
`;

const MovieHeaderTopLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: -400px;
  margin-bottom: 30px;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const MovieHeaderLayout = styled.div`
  display: none;
  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 300px;
    margin-top: -350px;
    margin-bottom: 50px;
  }
`;
