export default function appendToEachArrayValue(array, appendString) {
  let n = 0;
  for (let item of array) {
    array[n] = appendString + item;
    n++;
  }

  return array;
}
