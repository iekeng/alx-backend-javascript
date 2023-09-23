const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

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

        console.log(`Number of students: ${lineCount}`);

        for (const field in fieldCount) {
          if (field) {
            console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${getList(field, lines)}`);
          }
        }

        resolve(); // Resolve the promise when processing is complete
      }
    });
  });
}

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', ' text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.send(data.join('\n'));
    })
    .catch(() => {
      res.statusCode = 404;
      res.send('Cannot load the database');
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
