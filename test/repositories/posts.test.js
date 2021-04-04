const path = require("path");
const { expect } = require("chai");
const knex = require("knex");
const { DockerComposeEnvironment } = require("testcontainers");

let composeEnv;
before(async () => {
  const composeFilePath = path.resolve(__dirname, "..", "..");
  composeEnv = new DockerComposeEnvironment(
    composeFilePath,
    "docker-compose.yaml"
  );
  await composeEnv.up();

  const dbContainer = composeEnv.getContainer("database_1");
  const connection = knex({
    client: "pg",
    connection: {
      host: dbContainer.getHost(),
      port: dbContainer.getMappedPort(5432),
      user: "postgres",
      password: "postgres",
      database: "tdd",
    },
  });
  console.log(connection);
  await connection.migrate.latest();

  return Promise.resolve();
});

after(async () => {
  composeEnv && await composeEnv.stop();
  return Promise.resolve();
});

describe("Posts repository", () => {
  describe("findById()", () => {
    it("returns post object when one is found", () => {
      expect(true).to.be.true;
    });
  });
});
