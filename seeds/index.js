const sequelize = require('../config/connection');
const { Plant, Sunshine, Zone } = require('../models');

const plants = require('./plants.json');
const zone = require('./zone.json');
const sunshine = require('./sunshine.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const plantresult = await Plant.bulkCreate(plants);
  const zoneresult = await Zone.bulkCreate(zone);
  const sunshineresult = await Sunshine.bulkCreate(sunshine);
};  

seedDatabase();