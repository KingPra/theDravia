import React from 'react';

import '../Location.css';

class Location extends React.Component {
  state = {
    location: undefined
  }

  getLocation = () => {
      this.setState({location: 'currently unavailable'})
  }

  render() {
    return (
      <div>
        <button className="button">Get Current Location</button>
      </div>
    );
  }
}

export default Location;
