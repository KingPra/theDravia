import React from 'react';

import Location from './Location';
import logo from '../images/logo.jpg';
import Weather from './Weather';

const Home = () => {
  return (
    <div>

      <Weather />
      <img src={logo} alt="logo"/>
      <p> Home Page</p>
      <Location />
    </div>
  );
}

export default Home;
