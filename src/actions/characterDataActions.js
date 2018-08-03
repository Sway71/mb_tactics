import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  REQUEST_CHARACTER,
  RECEIVE_CHARACTER
} from '../constants/characterActionTypes';
import { fetchCharacters } from '../requesters/characterRequesters';

export function requestCharacters() {
  return {
    type: REQUEST_CHARACTERS
  };
}

export function receiveCharacters(characters) {
  return {
    type: RECEIVE_CHARACTERS,
    characters
  };
}

export function getCharacters() {
  return (dispatch) => {
    dispatch(requestCharacters());
    fetchCharacters().then((response) => {
      dispatch(receiveCharacters(response));
    });
  };
}
