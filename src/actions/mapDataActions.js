import {
  REQUEST_MAPS,
  RECEIVE_MAPS,
  REQUEST_MAP,
  RECEIVE_MAP
} from '../constants/mapActionTypes';
import { fetchMaps } from '../requesters/mapRequesters';

export function requestMaps() {
  return {
    type: REQUEST_MAPS
  };
}

export function receiveMaps(maps) {
  return {
    type: RECEIVE_MAPS,
    maps
  };
}

export function getMaps() {
  return (dispatch) => {
    dispatch(requestMaps());
    fetchMaps().then((response) => {
      dispatch(receiveMaps(response));
    });
  };
}
