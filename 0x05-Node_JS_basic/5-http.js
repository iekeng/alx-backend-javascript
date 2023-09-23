const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    console.log('This is a list of our students');

    countStudents(process.argv[2])
      .catch((error) => {
        console.log(error);
      });
  }
});

app.listen(port, host, () => console.log('Server is running'));
