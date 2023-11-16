const request = require("supertest");
const { Record } = require("../../models");
let server;

describe("/api/records", () => {
  beforeEach(async () => {
    server = require("../../index");
  });
  afterEach(async () => {
    server.close();
    await Record.truncate();
  });

  describe("GET /", () => {
    it("should return all records", async () => {
      const res = await request(server).get("/api/records");

      expect(res.status).toBe(200);
    });
  });
});
