const express = require('express');
const app = express();
const port = 7865;

app.listen(port, (error) => {
  if(!error){
    console.log(`API available on localhost port ${port}`)
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
