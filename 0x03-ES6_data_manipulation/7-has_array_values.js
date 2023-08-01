export default function hasValuesFromArray(set, arr) {
  if (arr) {
    for (const item of arr) {
      if (!set.has(item)) {
        return false;
      }
    }
  }
  return true;
}
