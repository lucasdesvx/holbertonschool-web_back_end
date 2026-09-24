import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentsByField) => {
        const fields = Object.keys(studentsByField)
          .sort((firstField, secondField) => firstField.localeCompare(secondField, undefined, { sensitivity: 'base' }));
        const lines = ['This is the list of our students'];

        fields.forEach((field) => {
          const students = studentsByField[field];
          lines.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        });

        response.status(200).send(lines.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        response.status(200).send(`List: ${(studentsByField[major] || []).join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
