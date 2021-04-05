const postsRepo = require("../repositories/posts");

module.exports = {
  async getPost(id) {
    try {
      return await postsRepo.findById(id);
    } catch (e) {
      console.error(`error fetching post with id ${id}: ${e}`);
      return;
    }
  },
};
