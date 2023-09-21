const sinon = require('sinon')
const sendPaymentRequestToAPI = require('./5-payment')

describe('Two tests', function() {
  
  let consoleSpy;

  beforeEach(function(){
    consoleSpy = sinon.spy(console, 'log');
  })

  afterEach(function(){
    consoleSpy.restore();
  })

  it('verify sendPaymentRequestToAPI logging result called with 100 and 120', function(){
    sendPaymentRequestToAPI(100, 20);
    
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWith(consoleSpy, 'The total is: 120')
    
  });
  it('verify sendPaymentRequestToAPI logging result called with 10 and 10', function(){
    sendPaymentRequestToAPI(10, 10);

    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWith(consoleSpy, 'The total is: 20')
  });
})
