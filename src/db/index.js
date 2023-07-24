const { Sequelize } = require('sequelize');
const config = require('../shared/config');

module.exports = new Sequelize({
  dialect: config.db.dialect,
  port: config.db.port,
  database: config.db.name,
  username: config.db.user,
  password: config.db.password,
});