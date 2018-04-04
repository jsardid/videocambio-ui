import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./../components/Header";
import { Home } from "./../pages/Home";
import MovieDetailContainer from "./../pages/MovieDetailContainer";
import { SearchResults } from "./../pages/SearchResults";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 120px !important;
  background:  rgb(20, 22, 60);
  background-attachment: fixed;
`;

const App = () => (
  <div>
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:movieId" component={MovieDetailContainer} />
        <Route exact path="/search" component={SearchResults} />
      </Switch>
    </Content>
  </div>
);

export default App;
