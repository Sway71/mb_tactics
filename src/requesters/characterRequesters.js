import { getRequest } from '../utils/request';

export function fetchCharacters() {
  return getRequest('http://localhost:1234/characters');
}

export function fetchCharacter(id) {
  return getRequest(`http://localhost:1234/characters/${id}`);
}
