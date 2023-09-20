const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test suite', () => {
  it('should return sum of both values', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('should return rounded value of summed result', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });

  it('should return rounded values of summed result', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });

  it('should return rounded up value of summed result', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
});
