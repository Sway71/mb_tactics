import { postRequest } from '../utils/request';

export function postCreateBattle(mapId, characterIds, enemyIds) {
  return postRequest('http://localhost:1234/battle/initialize', {
    mapId,
    allies: characterIds,
    enemies: enemyIds,
    allyLocations: [
      { 'x': 0, 'y': 0 },
  		{ 'x': 2, 'y': 0 },
  		{ 'x': 3, 'y': 0 }
    ],
    enemyLocations: [
      { 'x': 0, 'y': 1 },
  		{ 'x': 1, 'y': 0 },
  		{ 'x': 2, 'y': 1 }
    ]
  });
}
