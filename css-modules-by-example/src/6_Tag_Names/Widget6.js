import React from 'react';
import styles from './Widget6.css';

console.log('Widget6 styles:', styles);

class Widget6 extends React.Component {
  render() {
    return (
      <div>
        <input
          className={styles.large}
          placeholder="I am large" />
        <div className={styles.medium}>
          <input placeholder="I am medium" />
        </div>
        <div className={styles.tiny}>
          <input placeholder="I am so tiny" />
        </div>
      </div>
    );
  }
}
export default Widget6;
