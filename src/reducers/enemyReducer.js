import {
  REQUEST_ENEMIES,
  RECEIVE_ENEMIES
} from '../constants/enemyDataActionTypes';

const initialState = {
  isFetching: false,
  data: {
    id: null,
    name: 'Name not found'
  },
  enemiesList: []
};

function enemyReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ENEMIES:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_ENEMIES:
      return {
        ...state,
        isFetching: false,
        enemiesList: action.enemies
      };

    default:
      return state;
  }
}

export default enemyReducer;
