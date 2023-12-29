"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "turbines",
      [
        {
          name: "9c.25.be.01.01.0b",
          createdAt: "2022-07-27 21:04:11",
          updatedAt: "2022-07-27 21:04:11",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "species",
      [
        {
          name: "Unrecognised",
          createdAt: "2022-07-27 21:27:27",
          updatedAt: "2022-07-27 21:27:27",
        },
        {
          name: "Nyctalus noctula",
          createdAt: "2022-07-27 21:05:10",
          updatedAt: "2022-07-27 21:05:10",
        },
        {
          name: "Eptesicus sp.",
          createdAt: "2022-07-27 21:05:16",
          updatedAt: "2022-07-27 21:05:16",
        },
        {
          name: "Pipistrellus nathusii",
          createdAt: "2022-07-27 21:27:39",
          updatedAt: "2022-07-27 21:27:39",
        },
        {
          name: "Nyctalus leisleri",
          createdAt: "2022-07-27 21:27:51",
          updatedAt: "2022-07-27 21:27:51",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("turbines", null, {});
    await queryInterface.bulkDelete("species", null, {});
  },
};
