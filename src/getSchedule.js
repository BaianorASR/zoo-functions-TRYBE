const { hours, species } = require('../data/zoo_data');

const animals = species.map(({ name }) => name);
const days = Object.keys(hours);

const getDays = ({ open, close }) => `Open from ${open}am until ${close}pm`;

const getAnimals = (dayArgs) => species.filter(({ availability }) => availability.includes(dayArgs))
  .map(({ name }) => name);

const defaultReturn = () => Object.entries(hours).reduce((acc, elem) => {
  if (elem[0] === 'Monday') {
    acc.Monday = {
      officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
    };
    return acc;
  }
  acc[elem[0]] = {
    officeHour: getDays(elem[1]),
    exhibition: getAnimals(elem[0]),
  };
  return acc;
}, {});

function getSchedule(arg) {
  if (animals.includes(arg)) return species.find(({ name }) => name === arg).availability;
  if (days.includes(arg)) return { [arg]: defaultReturn()[arg] };
  return defaultReturn();
}

module.exports = getSchedule;
