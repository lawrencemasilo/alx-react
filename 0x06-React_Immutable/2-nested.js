export default function accessImmutableObject(object, array) {
  let result = object;
  
  for (const key of array) {
    if (result instanceof Map) {
      result = result.getIn([key]);
    } else if (typeof result === 'object' && result !== null) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  
  return result;
}
