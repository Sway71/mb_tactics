import {
  REQUEST_MAPS,
  RECEIVE_MAPS,
  REQUEST_MAP,
  RECEIVE_MAP
} from '../constants/mapActionTypes';

const initialState = {
  isFetching: false,
  data: {
    id: null,
    name: 'Name not found'
  },
  mapsList: []
};

function mapReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MAPS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_MAPS:
      return {
        ...state,
        isFetching: false,
        mapsList: action.maps
      };

    case REQUEST_MAP:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_MAP:
      return {
        ...state,
        isFetching: false,
        data: action.mapData
      };

    default:
      return state;
  }
}

export default mapReducer;
