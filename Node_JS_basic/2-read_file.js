const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data
      .split('\n')
      .filter((line) => line.trim().length > 0);

    const studentLines = lines.slice(1);
    console.log(`Number of students: ${studentLines.length}`);

    const fields = {};

    studentLines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0];
      const field = student[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    Object.keys(fields).forEach((field) => {
      const list = fields[field];
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`,
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
