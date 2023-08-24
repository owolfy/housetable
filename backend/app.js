require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const housesRouter = require('./routes/api/houses');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/houses', housesRouter);

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log(`Server Started at ${3000}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = app;
