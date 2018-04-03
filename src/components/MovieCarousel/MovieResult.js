import React from "react";
import "./MovieResult.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieLinkContainer = styled.div`
    text-align: center;
`;

const Poster = styled.img`
    height: 300px;
    width: 200px;
    background-color: #333;
`;

const StyledLink = styled(Link)`
    display:inline-block;
`;

export const MovieResult = props => {
  return (
    <MovieLinkContainer>
      <StyledLink to={"/movies/"+props.movie.tmdb_id}>
        <Poster
          src={"https://image.tmdb.org/t/p/w300/" + props.movie.tmdb_poster_path}
          alt="poster"
          onLoad={() => window.dispatchEvent(new Event('resize'))} // Fix for react slick
        />
      </StyledLink>
    </MovieLinkContainer>
  );
};
