import React from 'react';
import axios from 'axios';

import '../Weather.css';

const API_KEY = 'a53130cd66281fe281431da75fa09d0e';

class Weather extends React.Component {
   state = {
     temps: undefined,
     icon: undefined
   }

componentDidMount() {
  this.getWeather();
}

 weatherIcon = (val) => {
  console.log(this);
}
  getWeather = () => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Charlotte,us&appid=${API_KEY}&units=imperial`)
      .then(response => {
        const data = response.data;
        // weather icon display:
        const iconURL = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        this.setState({
          temps: Math.round(data.main.temp),
          icon: iconURL
        });
        console.log(iconURL)
      })
  };

  render() {
    return (
      <div>
        <p className="temps">{this.state.temps}*F</p>
        <img src={this.state.icon} alt="weather icons" className="icon"/>
      </div>
    );
  }
}

export default Weather;
