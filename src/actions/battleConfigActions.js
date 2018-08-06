import {
  SELECT_MAP,
  TOGGLE_CHARACTER,
  SELECT_ENEMY,
  REQUEST_CREATE_BATTLE,
  RECEIVE_CREATE_BATTLE
} from '../constants/battleConfigActionTypes';

import { postCreateBattle } from '../requesters/battleConfigRequesters';

export function selectMap(mapId) {
  return {
    type: SELECT_MAP,
    mapId
  };
}

export function selectCharacter(characterId) {
  return {
    type: TOGGLE_CHARACTER,
    characterId
  };
}

export function selectEnemy(enemyId) {
  return {
    type: SELECT_ENEMY,
    enemyId
  };
}

export function requestCreateBattle() {
  return {
    type: REQUEST_CREATE_BATTLE
  };
}

export function receiveCreateBattle(response) {
  const { battleId, turnOrder } = response;
  return {
    type: RECEIVE_CREATE_BATTLE,
    battleId,
    turnOrder
  };
}

export function createBattle() {
  return (dispatch, getState) => {
    const { battleConfig: {
      mapId,
      characterIds,
      enemyIds
    } } = getState();
    dispatch(requestCreateBattle(mapId, characterIds, enemyIds));

    postCreateBattle().then((response) => {
      dispatch(receiveCreateBattle(response));
    });
  };
}
