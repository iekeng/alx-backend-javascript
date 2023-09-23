const fs = require('fs');
const http = require('http');

const port = 1245;
const host = 'localhost';

function getList(field, lines) {
  const studentList = [];
  lines.forEach((line) => {
    const [firstName, lastName, age, currentField] = line.split(',');
    if (firstName && lastName && age && currentField === field) {
      studentList.push(firstName);
    }
  });
  const list = studentList.join(', ');
  return list;
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fieldCount = {};
    let lineCount = 0;
    let output = '';

    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fieldLines = data.trim().split('\n');
        const lines = fieldLines.slice(1); // Use slice instead of splice to skip the header line

        lines.forEach((line) => {
          const [firstName, lastName, age, field] = line.split(',');
          if (firstName && lastName && age && field) {
            if (fieldCount[field]) {
              fieldCount[field] += 1;
            } else {
              fieldCount[field] = 1;
            }
            lineCount += 1;
          }
        });

        output += `Number of students: ${lineCount}\n`;

        for (const field in fieldCount) {
          if (field) {
            output += `Number of students in ${field}: ${fieldCount[field]}. List: ${getList(field, lines)}\n`;
          }
        }

        resolve(output); // Resolve the promise when processing is complete
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', ' text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.statusCode = 404;
        console.log(error);
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, host, () => console.log('Server running'));

module.exports = app;
