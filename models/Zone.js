const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Zone extends Model {}

Zone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    zonename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'zone',
    underscored: true,
  }

);

module.exports = Zone;
