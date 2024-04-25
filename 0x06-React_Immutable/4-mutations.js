import { Map } from 'immutable';

const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.withMutations((mutableMap) => {
  mutableMap.set(2, 'Benjamin');
  mutableMap.set(4, 'Olivia');
});

export { map, map2 };
