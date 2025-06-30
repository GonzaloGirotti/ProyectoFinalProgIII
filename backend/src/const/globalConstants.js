require('dotenv').config()

module.exports = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD
}