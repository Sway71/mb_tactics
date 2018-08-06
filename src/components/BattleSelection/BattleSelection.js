import styles from './BattleSelection.css';

import React from 'react';

export const BattleSelection = ({
  battleConfig,
  mapsList,
  charactersList,
  enemiesList,
  selectMap,
  selectCharacter,
  selectEnemy,
  createBattle
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Select Map</h3>
        <div className={styles.selectionList}>
          {mapsList.map((map, index) => {
            return (
              <div
                className={map.id === battleConfig.mapId ? styles.selected : styles.boxItem}
                key={`map-choice-${index}`}
                onClick={() => {selectMap(map.id);}}
              >
                {map.name}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Select Characters</h3>
        <div className={styles.selectionList}>
          {charactersList.map((character, index) => {
            const { characterIds } = battleConfig;
            return (
              <div
                className={characterIds.includes(character.id) ? styles.selected: styles.boxItem}
                key={`character-choice-${index}`}
                onClick={() => {selectCharacter(character.id);}}
              >
                {character.name}

                {characterIds.includes(character.id) ? <div className={styles.characterIndex}>
                  {characterIds.indexOf(character.id) + 1}
                </div> : null}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Select Enemies</h3>
        <div className={styles.selectionList}>
          {enemiesList.map((enemy, index) => {
            const { enemyIds } = battleConfig;
            return (
              <div
                className={enemyIds.includes(enemy.id) ? styles.selected: styles.boxItem}
                key={`character-choice-${index}`}
                onClick={() => {selectEnemy(enemy.id);}}
              >
                {enemy.name}

                {enemyIds.includes(enemy.id) ? <div className={styles.characterIndex}>
                  {enemyIds.filter((id) => id === enemy.id).length}
                </div> : null}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={createBattle}>
        Create Battle
      </button>
    </div>
  );
};
