const sinon = require('sinon')
const expect = require('chai').expect
const getPaymentTokenFromAPI = require('./6-payment_token') 

describe('getPaymentTokenFromAPI', function(){
  
  it('Tests getPaymentTokenFromAPI to be true', function(done){
  getPaymentTokenFromAPI(true)
  .then((response) => {
    expect(response.data).to.be.equal('Successful response from the API');
    done();
  }).catch((error) => {
    done(error);
    });
  });
});
