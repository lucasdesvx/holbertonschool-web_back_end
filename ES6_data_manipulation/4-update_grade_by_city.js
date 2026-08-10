/**
 * Updates the grades of students from a specific city.
 * @param {Array} students - The list of students.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - The array of new grade objects.
 * @returns {Array} A new array of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if students is an array before processing
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find if there is a matching grade object for the current student's id
      const gradeObj = newGrades.find((g) => g.studentId === student.id);

      return {
        ...student,
        // If a grade object is found, use its grade; otherwise, default to 'N/A'
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
