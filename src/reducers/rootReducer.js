import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import mapReducer from './mapReducer';

const rootReducer = combineReducers({
  characterData: characterReducer,
  mapData: mapReducer
});

export default rootReducer;
