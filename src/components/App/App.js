import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./../Header/Header";
import HomeContainer from "./../../containers/HomeContainer";
import MovieDetailContainer from "./../../containers/MovieDetailContainer";
import { SearchResults } from "./../../containers/SearchResults";
import styled from "styled-components";

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  flex-shrink: 0;
`;

const Main = styled.div`
  flex-grow: 1; 
  overflow-y: auto;
  background: rgb(20, 22, 60);
`;

const App = () => (
  <Content>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <Main>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movies/:movieId" component={MovieDetailContainer} />
        <Route exact path="/search" component={SearchResults} />
      </Switch>
    </Main>
  </Content>
);

export default App;
