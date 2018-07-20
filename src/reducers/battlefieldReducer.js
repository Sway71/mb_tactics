import { REQUEST_BATTLEFIELD, RECEIVE_BATTLEFIELD } from '../constants/battlefieldActionTypes';

const initialState = {
  isFetching: false,
  data: {
    id: null,
    name: 'Name not found'
  }
};

function battleFieldReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_BATTLEFIELD:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_BATTLEFIELD:
      return {
        ...state,
        isFetching: false,
        data: action.mapData
      };

    default:
      return state;
  }
}

export default battleFieldReducer;
