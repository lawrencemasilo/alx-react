export default function accessImmutableObject(object, array) {
  let current = object;
  for (const key of array) {
    if (Map.isMap(current)) {
      current = current.get(key);
    } else if (typeof current === 'object' && current !== null) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
}
