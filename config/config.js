const dotenv = require('dotenv');//reads the .env file
dotenv.config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "mteburhx",
    "database": "mashat_db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
