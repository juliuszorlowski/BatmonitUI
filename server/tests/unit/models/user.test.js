const jwt = require("jsonwebtoken");
const config = require("config");
const { DataTypes } = require("sequelize");

describe("user.generateAuthToken", () => {
  it("should return a valid JWT", () => {
    const user = {
      uuid: new DataTypes.UUIDV4(),
      name: "Username",
      isAdmin: true,
    };
    const token = jwt.sign(
      { uuid: user.uuid, name: user.name, isAdmin: user.isAdmin },
      config.get("jwtPrivateKey")
    );

    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));

    expect(decoded).toMatchObject(user);
  });
});
