import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }

      const studentsByField = {};
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      lines.slice(1).forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });

      resolve(studentsByField);
    });
  });
}

export default readDatabase;
