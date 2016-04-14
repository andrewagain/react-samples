import React from 'react';

class Planet extends React.Component {
  render() {
    return (
      <div
        className={this.props.name}
        onClick={this.context.planetClickHandler}
        style={{
          backgroundColor: this.props.color,
          position: 'relative',
          width: this.props.diameter,
          height: this.props.diameter,
          borderRadius: this.props.diameter / 2,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {this.props.name}
        </div>
      </div>
    );
  }
}
Planet.propTypes = {
  name: React.PropTypes.string,
  color: React.PropTypes.string,
  diameter: React.PropTypes.number,
};
Planet.contextTypes = {
  planetClickHandler: React.PropTypes.func,
};
export default Planet;
