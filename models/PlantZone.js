const { Model DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlantZone extends Model {};

PlantZone.init({
  plant_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'plants',
      key: 'id',
      unique: false
    },
    allowNull: false
  },
  zone_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'zone',
      key: 'id',
      unique: false
    },
    allowNull: false
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'plant_zone',
  underscored: true
});



})

module.exports = PlantZone;