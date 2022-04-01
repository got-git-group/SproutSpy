const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plantname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    space: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plant_url: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'plant',
    underscored: true,
  }
);

module.exports = Plant;
