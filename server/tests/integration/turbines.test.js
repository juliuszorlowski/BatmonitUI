const request = require("supertest");
const generateToken = require("../../middleware/token");
const { DataTypes } = require("sequelize");
const { Turbine } = require("../../models");
let server;

describe("/api/turbines", () => {
  beforeEach(async () => {
    server = require("../../index");
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
    let token;
    let name;

    const exec = async () => {
      return await request(server)
        .post("/api/turbines")
        .set("x-auth-token", token)
        .send({ name });
    };

    beforeEach(() => {
      const user = {
        uuid: new DataTypes.UUIDV4(),
        name: "Username",
        isAdmin: true,
      };
      token = generateToken(user);
      name = "Turbine 1";
    });

    it("should return 401 if user is not logged in", async () => {
      token = "";

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("should save the turbine if it is valid", async () => {
      await exec();

      const turbine = await Turbine.findOne({
        where: { name },
      });

      expect(turbine).not.toBeNull();
    });

    it("should return the turbine if it is valid", async () => {
      const res = await exec();

      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("name", "Turbine 1");
    });
  });
});
