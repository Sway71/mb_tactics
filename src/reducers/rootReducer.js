import { combineReducers } from 'redux';
import battleFieldReducer from './battlefieldReducer';

const rootReducer = combineReducers({
  battlefield: battleFieldReducer
});

export default rootReducer;
