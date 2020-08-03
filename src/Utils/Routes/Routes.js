
import React ,{ useState, useEffect } from 'react';
import PortFolio from '../../views/portFolio/portFolio';
import Projects from '../../views/projects/projects';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PortFolio />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
           <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

