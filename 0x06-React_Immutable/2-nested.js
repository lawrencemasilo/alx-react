export default function accessImmutableObject(object, array) {
  let result = object;
  for (const key of array) {
    if (result instanceof Map) {
      result = result.getIn([key]);
      if (result === undefined) return undefined;
    } else if (typeof result === 'object' && result !== null) {
      result = result[key];
      if (result === undefined) return undefined;
    } else {
      return undefined;
    }
  }
  return result instanceof Map ? result : new Map();
}
