const request = require("supertest");
const { Species } = require("../../models");
let server;

describe("/api/species", () => {
  beforeEach(async () => {
    server = require("../../index");
    await Species.sync();
  });
  afterEach(async () => {
    server.close();
    await Species.truncate();
  });

  describe("GET /", () => {
    it("should return all species", async () => {
      await Species.bulkCreate([
        { name: "Species 1" },
        { name: "Species 2" },
        { name: "Species 3" },
      ]);

      const res = await request(server).get("/api/species");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
    });
  });
});
