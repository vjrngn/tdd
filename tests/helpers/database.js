module.exports = {
  seed: function ({ database, table, data }) {
    return database.insert(data).into(table).returning("*");
  },

  truncate: async function ({ database, table }) {
    await database.from(table).del();
    await database.raw(
      `SELECT setval('${table}_id_seq', COALESCE((SELECT MAX(id)+1 FROM ${table}), 1), false)`
    );
  },
};
