const express = require('express');
const app = express();
const port = 7865;

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`)
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

module.exports = app;
