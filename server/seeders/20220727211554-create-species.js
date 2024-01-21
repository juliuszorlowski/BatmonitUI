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
          name: "Barbastella barbastellus",
          createdAt: "2022-07-27 21:05:10",
          updatedAt: "2022-07-27 21:05:10",
        },
        {
          name: "Eptesicus nilssonii",
          createdAt: "2022-07-27 21:05:16",
          updatedAt: "2022-07-27 21:05:16",
        },
        {
          name: "Eptesicus serotinus",
          createdAt: "2022-07-27 21:27:39",
          updatedAt: "2022-07-27 21:27:39",
        },
        {
          name: "Myotis brandtii",
          createdAt: "2022-07-27 21:27:51",
          updatedAt: "2022-07-27 21:27:51",
        },
        {
          name: "Myotis dasycneme",
          createdAt: "2022-07-27 21:28:00",
          updatedAt: "2022-07-27 21:28:00",
        },
        {
          name: "Myotis daubentonii",
          createdAt: "2022-07-27 21:29:00",
          updatedAt: "2022-07-27 21:29:00",
        },
        {
          name: "Myothis nattereri",
          createdAt: "2022-07-27 21:30:00",
          updatedAt: "2022-07-27 21:30:00",
        },
        {
          name: "Nyctalus leisleri",
          createdAt: "2022-07-27 21:31:00",
          updatedAt: "2022-07-27 21:31:00",
        },
        {
          name: "Nyctalus noctula",
          createdAt: "2022-07-27 21:32:00",
          updatedAt: "2022-07-27 21:32:00",
        },
        {
          name: "Pipistrellus nathusii",
          createdAt: "2022-07-27 21:33:00",
          updatedAt: "2022-07-27 21:33:00",
        },
        {
          name: "Pipistrellus pipistrellus",
          createdAt: "2022-07-27 21:34:00",
          updatedAt: "2022-07-27 21:34:00",
        },
        {
          name: "Pipistrellus pygmaeus",
          createdAt: "2022-07-27 21:35:00",
          updatedAt: "2022-07-27 21:35:00",
        },
        {
          name: "Plecotus auritus",
          createdAt: "2022-07-27 21:36:00",
          updatedAt: "2022-07-27 21:36:00",
        },
        {
          name: "Vespertilio murinus",
          createdAt: "2022-07-27 21:37:00",
          updatedAt: "2022-07-27 21:37:00",
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
