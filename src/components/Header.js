import React from 'react';
import {Link} from 'react-router-dom';

export const Header =() => {
    return (
  <div className="header">
  <Link to="/" className="logo"><i className="material-icons moveme">all_inclusive</i>Infinity</Link>
      
  <div className="header-right">
    <Link className="" to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
  </div>
 
        
    )
}




