import React from 'react';

import '../css/Location.css';


const AnyReactComponent = ({ text }) => <div>{text}</div>
  //const API_KEY= 'AIzaSyCW15HLkARKoWKBePgLftUdKKQIyxaQYCM';

class Location extends React.Component {
  state= {
    location: 'Get Current Location'
  }

  getLocation = () => {
      this.setState({location: 'Currently Unavailable'})
  }
  handleClick = () => {
    console.log('this is': this);
  }

  render() {
    return (
      <div>
        <button onClick={this.getLocation} className="button">{this.state.location}</button>
      </div>
    );
  }
}

export default Location;
