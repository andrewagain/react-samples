import React from 'react';
import styles from './Widget5.css';

console.log('Widget5 styles:', styles);

class Widget5 extends React.Component {
  render() {
    return (
      <button className={styles.button}>Button</button>
    );
  }
}
export default Widget5;
