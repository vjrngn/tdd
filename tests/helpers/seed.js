module.exports = function ({ database, table, data }) {
  return database.insert(data).into(table).returning("*");
};
