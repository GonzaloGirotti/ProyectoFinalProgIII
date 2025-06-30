const globalConstants = require('../../const/globalConstants');

module.exports = {
  "development": {
    "host": "127.0.0.1",
    "dialect": "postgres",
    "username": globalConstants.DB_USER,
    "password": globalConstants.DB_PASSWORD,
    "database": globalConstants.DB_NAME,
    "logging": false
  }
}

