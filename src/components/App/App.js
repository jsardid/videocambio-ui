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

const Main = styled.div`
  background: rgb(20, 22, 60);
`;

const App = () => (
  <Content>
    <Header />
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
