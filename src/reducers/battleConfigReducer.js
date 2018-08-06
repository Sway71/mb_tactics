import {
  SELECT_MAP,
  TOGGLE_CHARACTER,
  SELECT_ENEMY
} from '../constants/battleConfigActionTypes';

const initialState = {
  mapId: null,
  characterIds: [],
  enemyIds: []
};

function battleConfigReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MAP:
      return {
        ...state,
        mapId: action.mapId
      };

    case TOGGLE_CHARACTER:
      if (state.characterIds.length < 3 && !state.characterIds.includes(action.characterId)) {
        return {
          ...state,
          characterIds: [...state.characterIds, action.characterId]
        };
      } else {
        return {
          ...state,
          characterIds: state.characterIds.filter((id) => id !== action.characterId)
        };
      }

    case SELECT_ENEMY:
    if (state.enemyIds.length < 3) {
      return {
        ...state,
        enemyIds: [...state.enemyIds, action.enemyId]
      };
    } else {
      return state;
    }

    default:
      return state;
  }
}

export default battleConfigReducer;
