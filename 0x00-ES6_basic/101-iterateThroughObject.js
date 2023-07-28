export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  for (const item of reportWithIterator) {
    string += `${item} | `;
  }
  string = string.slice(0, -3);
  return string;
}
