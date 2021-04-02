require("dotenv").config();

const {
  DB_HOST = "localhost",
  DB_PORT = 5432,
  DB_USER = "postgres",
  DB_PASSWORD = "postgres",
  DB_NAME = "app",
} = process.env;

module.exports = {
  client: "postgresql",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
  migrations: {
    tableName: "migrations",
    directory: "src/migrations"
  },
};
