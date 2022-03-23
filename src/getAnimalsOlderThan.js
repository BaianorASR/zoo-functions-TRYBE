const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.find(({ name }) => name === animal)
  .residents.every((e) => e.age >= age);

module.exports = getAnimalsOlderThan;
