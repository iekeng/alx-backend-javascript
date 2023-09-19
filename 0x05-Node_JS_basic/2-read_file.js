const fs = require('fs');

function getList(field, lines) {
  const studentList = [];
  lines.forEach((line) => {
    const [firstName, lastName, age, currentField] = line.split(',');
    if (firstName && lastName && age && currentField === field) {
      studentList.push(firstName);
    }
  });
  const list = studentList.join(',');
  return list;
}

function countStudents(path) {
  try {
    const fieldCount = {};
    let lineCount = 0;
    const fileContent = fs.readFileSync(path, { encoding: 'utf-8' });
    const fieldLines = fileContent.trim().split('\n');
    const lines = fieldLines.splice(1);
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
    console.log(fieldCount);
    for (const field in fieldCount) {
      if (field) {
        console.log(`Number of students in ${field}: ${fieldCount[field]}. List: ${getList(field, lines)}`);
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    console.error(err);
  }
}

module.exports = countStudents;
