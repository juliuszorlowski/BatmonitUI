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
          name: "Turbine 1",
          createdAt: "2022-07-27 21:04:11",
          updatedAt: "2022-07-27 21:04:11",
        },
        {
          name: "Turbine 2",
          createdAt: "2022-07-27 21:04:17",
          updatedAt: "2022-07-27 21:04:17",
        },
        {
          name: "Turbine 3",
          createdAt: "2022-07-27 21:22:23",
          updatedAt: "2022-07-27 21:22:23",
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
    await queryInterface.bulkInsert(
      "records",
      [
        {
          date: "2020-04-10 18:21:30",
          turbineId: 1,
          bat: true,
          speciesId: 1,
          turbineStopSignal: false,
          verification: false,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:06:49",
          updatedAt: "2022-07-27 21:12:58",
        },
        {
          date: "2020-04-10 18:23:55",
          turbineId: 2,
          bat: false,
          speciesId: 2,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:07:54",
          updatedAt: "2022-07-27 21:10:54",
        },
        {
          date: "2020-04-10 20:26:21",
          turbineId: 3,
          bat: true,
          speciesId: 3,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:08:54",
          updatedAt: "2022-07-27 21:11:34",
        },
        {
          date: "2020-04-10 20:29:30",
          turbineId: 1,
          bat: true,
          speciesId: 4,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:13:51",
          updatedAt: "2022-07-27 21:17:23",
        },
        {
          date: "2020-04-10 20:31:10",
          turbineId: 3,
          bat: false,
          speciesId: 1,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:14:00",
          updatedAt: "2022-07-27 21:15:28",
        },
        {
          date: "2020-04-10 20:33:34",
          turbineId: 2,
          bat: true,
          speciesId: 2,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:15:03",
          updatedAt: "2022-07-27 21:16:08",
        },
        {
          date: "2020-04-10 20:21:30",
          turbineId: 2,
          bat: true,
          speciesId: 2,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:15:09",
          updatedAt: "2022-07-27 21:16:12",
        },
        {
          date: "2020-04-10 20:23:55",
          turbineId: 1,
          bat: false,
          speciesId: 1,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:15:29",
          updatedAt: "2022-07-27 21:16:52",
        },
        {
          date: "2020-04-10 20:26:21",
          turbineId: 3,
          bat: true,
          speciesId: 3,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:15:36",
          updatedAt: "2022-07-27 21:16:59",
        },
        {
          date: "2020-04-10 20:33:34",
          turbineId: 1,
          bat: true,
          speciesId: 2,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:15:41",
          updatedAt: "2022-07-27 21:17:11",
        },
        {
          date: "2020-04-10 20:21:30",
          turbineId: 2,
          bat: true,
          speciesId: 5,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:15:54",
          updatedAt: "2022-07-27 21:17:26",
        },
        {
          date: "2020-04-10 20:23:55",
          turbineId: 3,
          bat: false,
          speciesId: 1,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:16:04",
          updatedAt: "2022-07-27 21:17:34",
        },
        {
          date: "2020-04-10 20:26:21",
          turbineId: 3,
          bat: true,
          speciesId: 4,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:16:09",
          updatedAt: "2022-07-27 21:17:39",
        },
        {
          date: "2020-04-10 20:33:34",
          turbineId: 1,
          bat: true,
          speciesId: 2,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:16:19",
          updatedAt: "2022-07-27 21:17:52",
        },
        {
          date: "2020-04-10 20:23:55",
          turbineId: 1,
          bat: true,
          speciesId: 2,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          sonogram: "[PNG]",
          createdAt: "2022-07-27 21:16:25",
          updatedAt: "2022-07-27 21:17:57",
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
    await queryInterface.bulkDelete("records", null, {});
    await queryInterface.bulkDelete("turbines", null, {});
    await queryInterface.bulkDelete("species", null, {});
  },
};
