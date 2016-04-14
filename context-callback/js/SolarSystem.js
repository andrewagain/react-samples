import React from 'react';
import Planet from './Planet';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar">
        <Planet
          color="blue"
          diameter={100}
          name="Earth"
        />
        <Planet
          color="red"
          diameter={80}
          name="Mars"
        />
        <Planet
          color="orange"
          diameter={60}
          name="Venus"
        />
      </div>
    );
  }
}
export default SolarSystem;
