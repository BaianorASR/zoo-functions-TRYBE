const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age >= 50) { obj.senior += 1; return; }
    if (age >= 18) { obj.adult += 1; return; }
    obj.child += 1;
  });
  return obj;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const obj = countEntrants(entrants);
  const keys = Object.keys(obj);

  return keys.reduce((acc, e) => acc + data.prices[e] * obj[e], 0);
};

module.exports = { calculateEntry, countEntrants };
