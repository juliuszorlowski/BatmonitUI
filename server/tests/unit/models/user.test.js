const jwt = require("jsonwebtoken");
const config = require("config");
const generateToken = require("../../../middleware/token");
const { DataTypes } = require("sequelize");

describe("user.generateAuthToken", () => {
  it("should return a valid JWT", () => {
    const user = {
      uuid: new DataTypes.UUIDV4(),
      name: "Username",
      isAdmin: true,
    };
    const token = generateToken(user);

    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));

    expect(decoded).toMatchObject(user);
  });
});
