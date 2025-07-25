require('dotenv').config();

module.exports = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.PORT || 3000,
  DB_PORT: process.env.DB_PORT,
  DB_HOST: process.env.DB_HOST,
}