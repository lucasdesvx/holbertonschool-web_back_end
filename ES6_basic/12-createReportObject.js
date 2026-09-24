/**
 * Creates a report object containing all employees and a method
 * to retrieve the total number of departments.
 * @param {Object} employeesList - Object containing departments and employee lists.
 * @returns {Object} Report object with allEmployees property and getNumberOfDepartments method.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };
}
