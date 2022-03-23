const { species } = require('../data/zoo_data');

const allAnimals = () =>
  species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});

const countAnimals = (animal) => {
  if (!animal) return allAnimals();
  const filtered = species.find(({ name }) => name === animal.specie);
  if (animal.sex) return filtered.residents.filter(({ sex }) => sex === animal.sex).length;
  return filtered.residents.length;
};

module.exports = countAnimals;
