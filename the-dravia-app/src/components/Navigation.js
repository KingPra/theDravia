import React from 'react';
import {NavLink} from 'react-router-dom';

import '../Navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contacts">Contact Us</NavLink>
    </div>
  );
}

export default Navigation;
