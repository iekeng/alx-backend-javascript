export default function cleanSet(set, startString) {
  if (startString) {
    const arr = Array.from(set);
    const filteredArr = arr.filter((value) => value.startsWith(startString)).map((value) => value.replace(startString, ''));
    return filteredArr.join('-');
  }
  return '';
}
