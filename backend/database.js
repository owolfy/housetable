const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'sqlite',
    logging: false,
    pool: {
      acquire: 10000,
    },
  }
);

module.exports = sequelize;
