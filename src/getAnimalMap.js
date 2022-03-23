const { species } = require('../data/zoo_data');

const getNameBySpecie = (arg, { sex, sorted }) => {
  let target = species.find(({ name }) => name === arg).residents;
  if (sex) target = target.filter(({ sex: sexo }) => sexo === sex);
  const output = target.map(({ name }) => name);
  return sorted ? output.sort() : output;
};

const getLocationsAnimals = (arg, param) => {
  const localFilter = species.filter(({ location }) => location === arg);
  if (!param || !param.includeNames) return localFilter.map(({ name }) => name);
  return localFilter.map(({ name }) => ({ [name]: getNameBySpecie(name, param) }));
};

const getAnimalMap = (option) => {
  const arr = ['NE', 'NW', 'SE', 'SW'];
  return arr.reduce((acc, e) => {
    acc[e] = getLocationsAnimals(e, option);
    return acc;
  }, {});
};

module.exports = getAnimalMap;
