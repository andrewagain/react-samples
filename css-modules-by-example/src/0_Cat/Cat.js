import React from 'react';
import styles from './Cat.css';

class Cat extends React.Component {
  render() {
    return (
      <div className={styles.meow}>
        Orange Cat
      </div>
    );
  }
}
export default Cat;
