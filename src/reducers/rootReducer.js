import { combineReducers } from 'redux';

import mapReducer from './mapReducer';
import characterReducer from './characterReducer';
import enemyReducer from './enemyReducer';
import battleConfigReducer from './battleConfigReducer';

const rootReducer = combineReducers({
  mapData: mapReducer,
  characterData: characterReducer,
  enemyData: enemyReducer,
  battleConfig: battleConfigReducer
});

export default rootReducer;
