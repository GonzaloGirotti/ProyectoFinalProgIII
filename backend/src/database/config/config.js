const globalConstants = require('../../const/globalConstants');
require('dotenv').config();

module.exports = {
  "development": {
    "host": "127.0.0.1",
    "dialect": "postgres",
    "username": globalConstants.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "logging": false
  }
}

