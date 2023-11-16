const generateAuthToken = require("../../../middleware/token");
const auth = require("../../../middleware/auth");
const { DataTypes } = require("sequelize");

describe("auth middleware", () => {
  it("should populate req.user with the payload of a valid JWT", () => {
    const user = {
      uuid: new DataTypes.UUIDV4(),
      name: "Username",
      isAdmin: true,
    };
    const token = generateAuthToken(user);
    const req = {
      header: jest.fn().mockReturnValue(token),
    };
    const res = {};
    const next = jest.fn();

    auth(req, res, next);

    expect(req.user).toMatchObject(user);
  });
});
