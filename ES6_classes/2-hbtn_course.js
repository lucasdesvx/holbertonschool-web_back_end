export default class HolbertonCourse {
  /**
   * @param {string} name - The name of the course.
   * @param {number} length - How many months the course lasts.
   * @param {string[]} students - Array of student names.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val) || !val.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = val;
  }
}
