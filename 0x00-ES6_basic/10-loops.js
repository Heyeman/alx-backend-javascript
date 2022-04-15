export default function appendToEachArrayValue(array, appendString) {
  const copy = array;
  for (const idx of copy) {
    const value = copy[idx];
    copy[idx] = appendString + value;
  }

  return copy;
}
