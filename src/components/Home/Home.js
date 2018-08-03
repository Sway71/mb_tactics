import styles from './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menuCard}>
        <h2 className={styles.title}>
          Mistborn Tactics!
        </h2>
        <div>
          What do you want to do?
        </div>
        <div className={styles.linkList}>
          <Link to='/login'>
            Login
          </Link>
          <Link to='/battle-selection'>
            Battle!!
          </Link>
          <Link to='/three-test'>
            Three.js Test
          </Link>
        </div>
      </div>
    </div>
  );
};
