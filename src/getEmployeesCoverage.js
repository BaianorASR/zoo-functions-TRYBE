const { species, employees } = require('../data/zoo_data');

const getInfo = (arrSpecie, arg) => species
  .filter(({ id }) => arrSpecie.includes(id))
  .map((e) => e[arg]);

const mountObj = (arrObj, all) => {
  const reduce = arrObj.reduce(
    (acc, { id, firstName, lastName, responsibleFor }) => {
      const obj = {
        id,
        fullName: `${firstName} ${lastName}`,
        species: getInfo(responsibleFor, 'name'),
        locations: getInfo(responsibleFor, 'location'),
      };
      acc.push(obj);
      return acc;
    }, [],
  );
  return all ? reduce : reduce[0];
};

const search = (userObj) => {
  const user = Object.values(userObj).join();
  const searching = employees.find(
    ({ firstName, lastName, id }) =>
      firstName === user || lastName === user || id === user,
  );
  if (!searching) throw new Error('Informações inválidas');
  return searching;
};

function getEmployeesCoverage(userObj) {
  if (!userObj) return mountObj(employees, true);
  return mountObj([search(userObj)]);
}

module.exports = getEmployeesCoverage;
