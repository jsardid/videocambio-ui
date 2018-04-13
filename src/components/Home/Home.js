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
          list.movies.isFetched || (
            <MovieCarousel
              key={i}
              isFetching={list.movies.isFetching}
              isFetched={list.movies.isFetched}
              movies={list.movies}
              carouselTitle={list.carouselTitle}
            />
          )
        );
      })}
    </HomeContainer>
  );
};

export default Home;
