const postsRepo = require("../repositories/posts");

module.exports = {
  async all({ limit } = {}) {
    try {
      const posts = await postsRepo.getAllPosts({ limit });
      return posts;
    } catch (e) {
      console.error(`error fetching all posts`, e);
      return;
    }
  },

  async create(data) {
    console.log(data);
    try {
      const post = await postsRepo.createPost({
        userId: data.userId,
        title: data.title,
        body: data.body,
      });
      return post;
    } catch (e) {
      console.error(`error creating post`, e);
      return;
    }
  },

  async getPost(id) {
    try {
      return await postsRepo.findById(id);
    } catch (e) {
      console.error(`error fetching post with id ${id}`, e);
      return;
    }
  },

  async updatePost(id, data) {
    try {
      return await postsRepo.update(id, data);
    } catch (e) {
      console.error(`error updating post with id ${id}`, e);
      return;
    }
  },

  async deletePost(id) {
    try {
      await postsRepo.deletePost(id);
    } catch (e) {
      console.error(`error deleting post with id ${id}`, e);
      throw e;
    }
  },
};
