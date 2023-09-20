function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    const result = Math.round(a) / Math.round(b);
    if (result === Infinity) {
      return 'Error';
    }
    return result;
  }
}

module.exports = calculateNumber;
