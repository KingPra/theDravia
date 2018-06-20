import React from 'react';
import {NavLink} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';

import '../Navigation.css';

class Navigation extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu right isOpen={false}>
        <NavLink to="/">Menu</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contacts">Contact Us</NavLink>
      </Menu>
    );
  }
}

export default Navigation;
