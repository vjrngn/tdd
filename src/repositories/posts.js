const database = require("../database");

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

  update(id, data) {
    return database.table("posts").where("id", id).update(data).returning("*");
  },

  deletePost(id) {
    return database.from("posts").where("id", id).del();
  },
};
