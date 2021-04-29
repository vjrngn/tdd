const { expect } = require("chai");
const postsRepo = require("../../src/repositories/posts");
const testHelpers = require("../helpers/database");
const database = require("../../src/database");

describe("Posts Repository", function () {
  beforeEach(async function () {
    await testHelpers.truncate({ database, table: "posts" });
    await testHelpers.truncate({ database, table: "users" });
  });
  describe("findById()", function () {
    it("should return a post given a valid ID", async function () {
      const results = await testHelpers.seed({
        database,
        table: "users",
        data: [
          {
            name: "John Doe",
            email: "john@example.com",
          },
        ],
      });

      const user = results[0];
      await testHelpers.seed({
        database,
        table: "posts",
        data: [
          {
            title: "My first blog post",
            body: "I'm writing an integration test!",
            author: user.id,
          },
        ],
      });

      const post = await postsRepo.findById(1);

      expect(post.title).to.equal("My first blog post");
      expect(post.body).to.equal("I'm writing an integration test!");
    });
  });
});
