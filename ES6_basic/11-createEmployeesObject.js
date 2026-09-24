/**
 * Creates an object mapping a department name to a list of employees.
 * @param {String} departmentName - The name of the department.
 * @param {Array<String>} employees - Array of employee names.
 * @returns {Object} Object with dynamic department key and employees list.
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
