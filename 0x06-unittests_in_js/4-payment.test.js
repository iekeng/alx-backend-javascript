const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('validates Utils.calculateNumber is used', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWithExactly(stub, 'SUM', 100, 20);

    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');

    stub.restore();
    consoleSpy.restore();
  });
});
