import {
  REQUEST_CHARACTER,
  RECEIVE_CHARACTER,
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  REQUEST_CREATE_CHARACTER,
  RECEIVE_CREATE_CHARACTER,
  REQUEST_DELETE_CHARACTER,
  RECEIVE_DELETE_CHARACTER,
} from '../constants/characterActionTypes';

export function requestCharacter() {
  return {
    type: REQUEST_CHARACTER
  };
}

export function receiveCharacter(character) {
  return {
    type: RECEIVE_CHARACTER,
    character
  };
}

export function getCharacter(id) {
  return (dispatch) => {
    dispatch(requestCharacter());
    fetch(`http://localhost:1234/characters/${id}`)
      .then((response) => response.json())
      .then((character => {
        dispatch(receiveCharacter(character));
      }));
  };
}

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

export function getCharacters(id) {
  return (dispatch) => {
    dispatch(requestCharacter());
    fetch(`http://localhost:1234/characters/${id}`)
      .then((response) => response.json())
      .then((character => {
        dispatch(receiveCharacter(character));
      }));
  };
}
