const dotenv = require('dotenv');

const { parsed } = dotenv.config();

module.exports = {
  PORT: parsed.PORT,
  db: {
    dialect: parsed.DB_DIALECT,
    host: parsed.DB_HOST,
    port: parsed.DB_PORT,
    name: parsed.DB_NAME,
    user: parsed.DB_USER,
    password: parsed.DB_PASSWORD
  },
  jwt: {
    secret: parsed.JWT_SECRET
  }
};