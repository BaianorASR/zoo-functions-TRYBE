const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((e) => ids.includes(e.id));

module.exports = getSpeciesByIds;
