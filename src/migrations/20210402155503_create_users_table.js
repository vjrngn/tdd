exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
