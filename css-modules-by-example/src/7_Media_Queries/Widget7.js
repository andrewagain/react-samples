import React from 'react';
import styles from './Widget7.css';

console.log('Widget7 styles:', styles);

class Widget7 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.small}>
          The Window is Small
        </div>
        <div className={styles.large}>
          The Window is Big
        </div>
      </div>
    );
  }
}
export default Widget7;
