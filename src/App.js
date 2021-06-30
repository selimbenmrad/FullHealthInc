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
import TermOfUse from './TermOfUse';

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

          <li>
            <Link to="/Term of Use">Term of Use</Link>
          </li>
        </ul>
        <TermOfUse />
        <Confidentiality />
        <Assistance />
        <Contact />
       
      </div>
    </Router>
  );
}
