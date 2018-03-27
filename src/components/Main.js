import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from "./../pages/Home";
import { Movie } from "./../pages/Movie";
import { SearchResults } from "./../pages/SearchResults";

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/movies/:number' component={Movie}/>
    <Route exact path='/search' component={SearchResults}/>
  </Switch>
)

