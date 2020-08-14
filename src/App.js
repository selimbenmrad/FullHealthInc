import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Confidentiality from './Confidentiality';
import Contact from './Contact';
import Assistance from './Assistance';


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Confidentiality">Confidentiality</Link>
          </li>
          <li>
            <Link to="/Assistance">Assistance</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/Confidentiality">
            <Confidentiality />
          </Route>
          <Route path="/Assistance">
            <Assistance />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
