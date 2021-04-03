const postsRepo = require("../repositories/posts");

// You can't use test fakes for this test
// You can't test error scenarios

// The essence of a unit test is to test the behaviour of a single unit
// under different circumstances without depending on the unit's dependencies.
// The dependencies have their own unit tests to ensure proper behaviour.
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
