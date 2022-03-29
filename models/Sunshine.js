const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sunshine extends Model {}

Sunshine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sunshinename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'sunshine',
    underscored: true,
  }

);

module.exports = Sunshine;
