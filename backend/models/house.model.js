const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const House = sequelize.define(
  'House',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    loanAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    risk: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    initialAutoIncrement: 1,
    timestamps: false,
  }
);

module.exports = House;
