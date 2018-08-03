import styles from './BattleSelection.css';

import React from 'react';

export const BattleSelection = ({charactersList, mapsList}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Select Character</h3>
        <div className={styles.selectionList}>
          {charactersList.map((character, index) => {
            return (
              <div key={`character-choice-${index}`}>
                {character.name}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Select Map</h3>
        <div className={styles.selectionList}>
          {mapsList.map((map, index) => {
            return (
              <div key={`map-choice-${index}`}>
                {map.name}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Select Enemies (will handle later...)</h3>
      </div>
    </div>
  );
};
