import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from "./../pages/Home";
import MovieDetailContainer from "./../pages/MovieDetailContainer";
import { SearchResults } from "./../pages/SearchResults";

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/movies/:movieId' component={MovieDetailContainer}/>
    <Route exact path='/search' component={SearchResults}/>
  </Switch>
)

