/**
 * Calculates the sum of all student ids.
 * @param {Array} students - The array of student objects.
 * @returns {Number} The total sum of the ids.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
