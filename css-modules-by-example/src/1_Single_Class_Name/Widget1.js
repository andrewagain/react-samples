import React from 'react';
import styles from './Widget1.css';

console.log('Widget1 styles:', styles);

class Widget1 extends React.Component {
  render() {
    return (
      <button className={styles.button}>
        Click Me
      </button>
    );
  }
}
export default Widget1;
