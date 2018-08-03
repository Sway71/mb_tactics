import { getRequest } from '../utils/request';

export function fetchMaps() {
  return getRequest('http://localhost:1234/maps');
}

export function fetchMap(id) {
  return getRequest(`http://localhost:1234/maps/${id}`);
}
