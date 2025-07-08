const globalConstants = require('../../const/globalConstants');

module.exports = {
  "development": {
    "host": globalConstants.DB_HOST,
    "port": globalConstants.DB_PORT,
    "dialect": "postgres",
    "username": globalConstants.DB_USER,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_NAME,
    "logging": false
  },
}

