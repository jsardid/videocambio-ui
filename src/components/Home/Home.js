import React from "react";
import { MovieCarousel } from "./../MovieCarousel/MovieCarousel";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 20px 0px;
`;

const Home = props => {
  return (
    <HomeContainer>
      {props.lists.map((list, i) => {
        return (
          <MovieCarousel
            key={i}
            status={list.status}
            movies={list.movies}
            carouselTitle={list.carouselTitle}
          />
        );
      })}
    </HomeContainer>
  );
};

export default Home;
