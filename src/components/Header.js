import React from 'react';
import {Link} from 'react-router-dom';

export const Header =() => {
    return (
        
     <nav>
    <div className="nav-wrapper #e57373">
      <a href="/" className="brand-logo  move "><i class="material-icons">all_inclusive</i>Infinity-Images</a>
      <ul id="nav-mobile " class="right hide-on-med-and-down moveme">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  
 
        
    )
}




