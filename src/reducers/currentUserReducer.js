import { REQUEST_AUTH, RECEIVE_USER } from '../constants/currentUserActionTypes';

const initialState = {
  isFetching: false,
  data: {
    id: null,
    name: ''
  }
};

function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state
      };

    case RECEIVE_USER:
      return {
        ...state,
        data: action.userData
      };

    default:
      return state;
  }
}

export default currentUserReducer;
