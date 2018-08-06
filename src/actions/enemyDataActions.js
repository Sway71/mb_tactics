import {
  REQUEST_ENEMIES,
  RECEIVE_ENEMIES
} from '../constants/enemyDataActionTypes';

export function requestEnemies() {
  return {
    type: REQUEST_ENEMIES
  };
}

export function receiveEnemies(enemies) {
  return {
    type: RECEIVE_ENEMIES,
    enemies
  };
}

export function getEnemies(id) {
  return (dispatch) => {
    dispatch(requestEnemies());
    fetch('http://localhost:1234/enemies')
      .then((response) => response.json())
      .then((enemy => {
        dispatch(receiveEnemies(enemy));
      }));
  };
}
