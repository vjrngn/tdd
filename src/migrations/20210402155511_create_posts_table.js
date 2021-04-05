exports.up = function (knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("body");
    table.integer("author").unsigned().notNullable();
    table.timestamps(true, true);

    table
      .foreign("author")
      .references("users.id")
      .withKeyName("author_foreign");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts", (table) => {
    table.dropForeign("author_foreign").dropTable("continents");
  });
};
