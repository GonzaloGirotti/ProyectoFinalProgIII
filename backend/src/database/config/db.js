const { Sequelize } = require('sequelize');
const globalConstants = require('../../const/globalConstants');
require('dotenv').config();

const sequelize = new Sequelize({
  username: globalConstants.DB_USER,
  password: process.env.DB_PASSWORD,
  database: globalConstants.DB_NAME,
  logging: false,
  dialect: 'postgres',
});

const connectDB = async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos conectada.');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
};

module.exports = { sequelize, connectDB };