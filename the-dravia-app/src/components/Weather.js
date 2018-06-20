import React from 'react';
import axios from 'axios';

import '../Weather.css';

const API_KEY = 'a53130cd66281fe281431da75fa09d0e';

class Weather extends React.Component {
   state = {
     temps: undefined,
     description: undefined
   }

componentDidMount() {
  this.getWeather();
}
  getWeather = () => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Charlotte,us&appid=${API_KEY}&units=imperial`)
      .then(response => {
        this.setState({
          temps: Math.round(response.data.main.temp),
          description: response.data.weather[0].description
        });
        console.log(response.data.weather[0].description)
      })
  };

  render() {
    return (
      <div>
        <p className="temps">{this.state.temps}*F</p>
      </div>
    );
  }
}

export default Weather;
