const request = require("supertest");
const { Turbine } = require("../../models");
let server;

describe("/api/turbines", () => {
  beforeEach(async () => {
    server = require("../../index");
    await Turbine.sync();
  });
  afterEach(async () => {
    server.close();
    await Turbine.truncate();
  });

  describe("GET /", () => {
    it("should return all turbines", async () => {
      await Turbine.bulkCreate([
        { name: "Turbine 1" },
        { name: "Turbine 2" },
        { name: "Turbine 3" },
        { name: "Turbine 4" },
      ]);

      const res = await request(server).get("/api/turbines");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(4);
    });
  });
});
