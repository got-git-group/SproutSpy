const User = require('./User');
const Plant = require('./Plant');
const Zone = require('./Zone');
const Sunshine = require('./Sunshine');

Plant.belongsToMany(Sunshine, {
  through: 'PlantSunshine',
});

Sunshine.belongsToMany(Plant, {
  through: 'PlantSunshine',
});

Plant.belongsToMany(Zone, {
  through: 'PlantZone',
});

Zone.belongsToMany(Plant, {
  through: 'PlantZone',
});

module.exports = {
  User, Plant, Zone, Sunshine
};

// plants can have many zones, zone can have many plants, sunshine can have many plants,
// plants can have many sunshine, zone and sunshine do not need to be connected
