const request = require("supertest");
const generateToken = require("../../middleware/token");
const { DataTypes } = require("sequelize");
const { Species } = require("../../models");
let server;

describe("/api/species", () => {
  beforeEach(async () => {
    server = require("../../index");
  });
  afterEach(async () => {
    server.close();
    await Species.truncate();
  });

  describe("GET /", () => {
    it("should return all species", async () => {
      await Species.bulkCreate([{ name: "Species 1" }, { name: "Species 2" }]);

      const res = await request(server).get("/api/species");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some((s) => s.name === "Species 1")).toBeTruthy();
      expect(res.body.some((s) => s.name === "Species 2")).toBeTruthy();
    });
  });

  describe("GET /:id", () => {
    it("should return a species if valid id is passed", async () => {
      const species = await Species.create({ name: "Species 1" });

      const res = await request(server).get("/api/species/" + species.id);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("name", species.name);
    });

    it("should return 404 if invalid id is passed", async () => {
      const res = await request(server).get("/api/species/1");

      expect(res.status).toBe(404);
    });
  });

  describe("POST /", () => {
    let token;
    let name;

    const exec = async () => {
      return await request(server)
        .post("/api/species")
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
      name = "Species 1";
    });

    it("should return 401 if user is not logged in", async () => {
      token = "";

      const res = await exec();

      expect(res.status).toBe(401);
    });

    it("should save the species if it is valid", async () => {
      await exec();

      const species = await Species.findOne({
        where: { name },
      });

      expect(species).not.toBeNull();
    });

    it("should return the species if it is valid", async () => {
      const res = await exec();

      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("name", "Species 1");
    });
  });
});
