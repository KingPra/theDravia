import React from 'react';

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
        <button>Get current Location</button>
      </div>
    );
  }
}

export default Location;
