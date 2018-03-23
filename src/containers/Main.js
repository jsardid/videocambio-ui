import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from "./../pages/Home";
import { Movie } from "./../pages/Movie";

export const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/movies/:number' component={Movie}/>
  </Switch>
)

