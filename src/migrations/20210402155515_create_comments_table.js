exports.up = function (knex) {
  return knex.schema.createTable("comments", (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.integer("author").unsigned().notNullable();
    table.integer("post_id").unsigned().notNullable();
    table.timestamps();

    table
      .foreign("author")
      .references("users.id")
      .withKeyName("author_foreign");
    table
      .foreign("post_id")
      .references("posts.id")
      .withKeyName("post_id_foreign");
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropForeign("author_foreign")
    .dropForeign("post_id_foreign")
    .dropTable("comments");
};
