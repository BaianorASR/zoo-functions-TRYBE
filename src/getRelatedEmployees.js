const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((e) => e.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.reduce((acc, { managers, lastName, firstName }) => {
      if (managers.includes(managerId)) {
        acc.push(`${firstName} ${lastName}`);
      }
      return acc;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
