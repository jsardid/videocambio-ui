import React, { Component } from "react";
import { MovieResult } from "./../MovieResult/MovieResult";
import styled from "styled-components";

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieContainer = styled.div`
  margin: 20px;
`;

export class MovieList extends Component {
  render() {
    return (
      <MovieListContainer>
        {this.props.movies.map((movie, i) => {
          return (
            <MovieContainer key={i}>
              <MovieResult movie={movie} />
            </MovieContainer>
          );
        })}
      </MovieListContainer>
    );
  }
}
