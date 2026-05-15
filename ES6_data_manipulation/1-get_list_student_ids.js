/**
 * Extracts ids from a list of student objects.
 * @param {Array} listStudents - The array of student objects.
 * @returns {Number[]} An array of student ids, or an empty array if the input is invalid.
 */
export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  return listStudents.map((student) => student.id);
}
