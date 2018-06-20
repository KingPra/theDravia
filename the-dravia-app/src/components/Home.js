import React from 'react';

import '../Home.css';
import Location from './Location';
import logo from '../images/logo.jpg';
import menu from '../images/menu-24px.svg';
import Weather from './Weather';

const Home = () => {
  return (
    <div>
      <img src={menu} alt="menu" className="menu" />
      <Weather />
      <img src={logo} alt="logo" className="logo"/>
      <Location />
    </div>
  );
}

export default Home;
