const database = require("../database");

// can't swap implementation of the persistence layer
// this makes testing cumbersome
module.exports = {
  findById(id) {
    return database.first("*").from("posts").where("id", id);
  },

  createPost({ title, body, userId }) {
    return database
      .insert({ title, body, author: userId })
      .into("posts")
      .returning("*");
  },

  getAllPosts({ limit = 50 } = {}) {
    return database.select("*").from("posts").limit(limit);
  },
};
