import React from 'react';
import SolarSystem from './SolarSystem';

class Galaxy extends React.Component {
  getChildContext() {
    return {
      planetClickHandler: this.planetClickHandler.bind(this),
    };
  }

  planetClickHandler() {
    console.log('Planet clicked. Galaxy noticed.');
  }

  render() {
    return (
      <SolarSystem />
    );
  }
}
Galaxy.childContextTypes = {
  planetClickHandler: React.PropTypes.func,
};
export default Galaxy;
