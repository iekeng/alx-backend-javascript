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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const prelim = 'This is the list of our students';
  countStudents(process.argv[2])
    .then((data) => {
      const result = [prelim, data];
      res.send(result.join('\n'));
    })
    .catch((e) => {
      console.log(e.message);
    });
});

app.listen(port, () => console.log('Server running'));

module.exports = app;
