import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from "./../pages/Home";
import { Movie } from "./../pages/Movie";

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/movie' component={Movie}/>
  </Switch>
)

export default App
