import { is, Map } from 'immutable';

const areMapsEqual = (map1, map2) => {
  if (!(Map.isMap(map1) && Map.isMap(map2))) {
    throw new Error('Both arguments must be Immutable.js Maps');
  }

  return is(map1, map2);
};
