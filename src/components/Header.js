import React from 'react';
import {Link} from 'react-router-dom';

export const Header =() => {
    return (
        
    /* <nav>
    <div className="nav-wrapper red">
      <a href="/" className="brand-logo hide-on-med-and-down move center"><i class="material-icons">all_inclusive</i></a>
      <div className="center"></div>
      <ul id="nav-mobile" class="center moveme">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
  </nav>*/
  <div className="header">
  <a href="/" className="logo"><i className="material-icons moveme">all_inclusive</i>Infinity</a>
      
  <div className="header-right">
    <a className="" href="/">Home</a>
    <a href="/About">About</a>
    <a href="/contact">Contact</a>
  </div>
  </div>
 
        
    )
}




