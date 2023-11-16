const request = require("supertest");
const jwt = require("jsonwebtoken");
const config = require("config");
const { DataTypes } = require("sequelize");
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
      ]);

      const res = await request(server).get("/api/turbines");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(3);
      expect(res.body.some((t) => t.name === "Turbine 1")).toBeTruthy();
      expect(res.body.some((t) => t.name === "Turbine 2")).toBeTruthy();
      expect(res.body.some((t) => t.name === "Turbine 3")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    it("should return a turbine if valid id is passed", async () => {
      const turbine = await Turbine.create({ name: "Turbine 1" });

      const res = await request(server).get("/api/turbines/" + turbine.id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", turbine.name);
    });

    it("should return 404 if invalid id is passed", async () => {
      const res = await request(server).get("/api/turbines/1");

      expect(res.status).toBe(404);
    });
  });

  describe("POST /", () => {
    it("should return 401 if user is not logged in", async () => {
      const res = await request(server)
        .post("/api/turbines")
        .send({ name: "Turbine 1" });

      expect(res.status).toBe(401);
    });
  });
});
