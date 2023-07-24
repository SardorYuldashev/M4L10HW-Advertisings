const config = require('../../src/shared/config');

module.exports = {
  "development": {
    "username": config.db.user,
    "password": config.db.password,
    "database": config.db.name,
    "host": config.db.host,
    "dialect": config.db.dialect
  },
  "test": {
    "username": config.db.user,
    "password": config.db.password,
    "database": config.db.name,
    "host": config.db.host,
    "dialect": config.db.dialect
  },
  "production": {
    "username": config.db.user,
    "password": config.db.password,
    "database": config.db.name,
    "host": config.db.host,
    "dialect": config.db.dialect
  }
};
