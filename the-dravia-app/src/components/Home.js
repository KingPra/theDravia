import React from 'react';

import '../css/Home.css';
import Location from './Location';
import logo from '../images/logo.jpg';
import menu from '../images/menu-24px.svg';
import Weather from './Weather';
import Menu from './Menu';

const Home = () => {
  return (
    <div>
      <Weather />
      <img src={logo} alt="logo" className="logo"/>
      <Location />
      <section className="menu">
        <Menu />
      </section>
    </div>
  );
}

export default Home;
