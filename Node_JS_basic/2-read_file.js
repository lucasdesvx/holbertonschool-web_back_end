const fs = require('fs');

/**
 * Counts and logs students from a CSV file synchronously.
 * @param {string} path - The path to the CSV database file.
 */
function countStudents(path) {
  try {
    // Read file synchronously with UTF-8 encoding
    const data = fs.readFileSync(path, 'utf-8');
    
    // Split lines and filter out empty rows
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    // If the file only has a header or is completely empty
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract the header and the student rows
    const headers = lines[0].split(',');
    const studentRows = lines.slice(1);

    // Find the indexes for firstname and field dynamically
    const firstNameIdx = headers.indexOf('firstname');
    const fieldIdx = headers.indexOf('field');

    // Object to hold fields grouped by field name: { CS: [...], SWE: [...] }
    const fields = {};
    let totalStudents = 0;

    for (const row of studentRows) {
      const studentData = row.split(',');
      
      // Ensure the row has the required columns before parsing
      if (studentData.length === headers.length) {
        const firstName = studentData[firstNameIdx].trim();
        const field = studentData[fieldIdx].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
        totalStudents += 1;
      }
    }

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log details for each field
    for (const [fieldName, firstnameList] of Object.entries(fields)) {
      console.log(`Number of students in ${fieldName}: ${firstnameList.length}. List: ${firstnameList.join(', ')}`);
    }

  } catch (error) {
    // Throw the required error if the file can't be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
