const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return sum of both values', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('should return difference between rounded value of args', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should return quotient from rounded values of args', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('should return Error string', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });
});
