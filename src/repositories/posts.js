const database = require("../database");

module.exports = {
  findById(id) {
    return database.first("*").from("posts").where("id", id);
  },
};
