const {
  DB_HOST = "localhost",
  DB_PORT = 5432,
  DB_USER = "postgres",
  DB_PASSWORD = "postgres",
  DB_NAME = "tdd",
} = process.env;

module.exports = require("knex")({
  client: "pg",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
});
