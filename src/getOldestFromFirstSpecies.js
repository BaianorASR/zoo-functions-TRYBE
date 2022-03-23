const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const fistResponsible = employees.find((e) => e.id === id).responsibleFor[0];
  const obj = species.find((e) => e.id === fistResponsible)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(obj);
}

module.exports = getOldestFromFirstSpecies;
