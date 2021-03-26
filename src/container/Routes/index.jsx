import React from 'react'
import { Switch, Route,Router } from 'react-router-dom'


import Home from "../Home/Home";

import Edit from "../../database/Data/Edit";
import Show from "../../database/Data/Show";
import Pickstory from "../Pickstory/Pickstory";
import Add from "../../database/Data/Add"

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route  path='/Pickstory' component={Pickstory} />
    <Route path='/Edit/:id' component={Edit} />
        <Route path='/Add' component={Add} /> 
        <Route path='/Show/:id' component={Show} /> 
    

    <Router>
      <div>
      
       
      </div>
  </Router>

  </Switch>

)