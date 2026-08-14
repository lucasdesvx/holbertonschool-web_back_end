const fs = require('fs').promises;

/**
 * Counts and logs students from a CSV file asynchronously.
 * @param {string} path - The path to the CSV database file.
 * @returns {Promise<void>}
 */
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split lines and filter out empty or whitespace-only lines
      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      if (lines.length <= 1) {
        // Only header or empty file means 0 students
        console.log('Number of students: 0');
        return;
      }

      // Extract rows skipping the header line
      const studentRows = lines.slice(1);
      console.log(`Number of students: ${studentRows.length}`);

      const fields = {};

      for (const row of studentRows) {
        const student = row.split(',');
        // Skip malformed rows that don't have enough columns
        if (student.length < 4) continue;

        const firstName = student[0].trim();
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }

      // Log statistics per field
      for (const [field, students] of Object.entries(fields)) {
        console.log(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
        );
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
