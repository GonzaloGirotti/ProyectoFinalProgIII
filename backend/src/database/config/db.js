const { Sequelize } = require('sequelize');
const globalConstants = require('../../const/globalConstants');

const sequelize = new Sequelize({
  dialect: "postgres",
  username: globalConstants.DB_USER,
  password: globalConstants.DB_PASSWORD,
  database: globalConstants.DB_NAME,
  logging: false
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