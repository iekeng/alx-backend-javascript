const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return sum of both values', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(result, 6);
  });

  it('should return difference between rounded value of args', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.equal(result, -4);
  });

  it('should return quotient from rounded values of args', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.equal(result, 0.2);
  });

  it('should return Error string', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    assert.equal(result, 'Error');
  });
});
