export default function appendToEachArrayValue(array, appendString) {
  const copy = array;
  for (let idx of copy) {
    const value = idx;
    idx = appendString + value;
  }

  return copy;
}
