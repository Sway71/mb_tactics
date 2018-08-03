import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  REQUEST_CHARACTER,
  RECEIVE_CHARACTER
} from '../constants/characterActionTypes';

const initialState = {
  isFetching: false,
  data: {
    id: null,
    name: 'Name not found'
  },
  charactersList: []
};

function characterReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_CHARACTERS:
      return {
        ...state,
        isFetching: false,
        charactersList: action.characters
      };

    case REQUEST_CHARACTER:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_CHARACTER:
      return {
        ...state,
        isFetching: false,
        data: action.characterData
      };

    default:
      return state;
  }
}

export default characterReducer;
