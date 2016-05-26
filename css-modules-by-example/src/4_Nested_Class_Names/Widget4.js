import React from 'react';
import styles from './Widget4.css';

console.log('Widget4 styles:', styles);

class Widget4 extends React.Component {
  render() {
    return (
      <div>
        <button className={styles.button}>Regular Button</button>
        <br/>
        <div className={styles.fun}>
          <button className={styles.button}>FUN BUTTON</button>
        </div>
      </div>
    );
  }
}
export default Widget4;
