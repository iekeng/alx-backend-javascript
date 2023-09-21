const app = require('./app');
const request = require('request');
const expect = require('chai').expect;

describe('Index page', function(){
  const url = 'http://localhost:7865';
  
  it('verify status code and content of url request to homepage', function(done){
    resquest.get(url)
    .then((res) => {
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.equal('Welcome to the payment system');
    done();
    }).catch((error) => done(error);)
  });
});
