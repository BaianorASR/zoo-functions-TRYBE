const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (!employeeName ? {}
  : data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName));

module.exports = getEmployeeByName;
