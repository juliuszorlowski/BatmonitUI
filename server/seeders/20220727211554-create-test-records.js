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
          uuid: "da81f557-940f-40e6-85a0-dbd56225fdae",
          name: "Turbine 1",
          createdAt: "2022-07-27 21:04:11",
          updatedAt: "2022-07-27 21:04:11",
        },
        {
          uuid: "93b6511b-7fb1-4603-9c93-259811eac1f0",
          name: "Turbine 2",
          createdAt: "2022-07-27 21:04:17",
          updatedAt: "2022-07-27 21:04:17",
        },
        {
          uuid: "a86f0697-62d8-49b8-825a-874275a3026e",
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
          uuid: "92f4b9c3-7a67-4639-a2ef-c751e3aafa98",
          name: "Unrecognised",
          createdAt: "2022-07-27 21:27:27",
          updatedAt: "2022-07-27 21:27:27",
        },
        {
          uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
          name: "Nyctalus noctula",
          createdAt: "2022-07-27 21:05:10",
          updatedAt: "2022-07-27 21:05:10",
        },
        {
          uuid: "a86d989a-336b-421b-9c45-8010c63d6125",
          name: "Eptesicus sp.",
          createdAt: "2022-07-27 21:05:16",
          updatedAt: "2022-07-27 21:05:16",
        },
        {
          uuid: "d670f2a1-4e06-493e-a81e-f04ef51577d7",
          name: "Pipistrellus nathusii",
          createdAt: "2022-07-27 21:27:39",
          updatedAt: "2022-07-27 21:27:39",
        },
        {
          uuid: "e6790fbf-ae63-4074-848e-8343024977c3",
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
          uuid: "e72224ab-d263-45a0-b854-e66e4fd20be8",
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
          uuid: "cd0c279e-600c-4f0f-b986-cfb74a14ea28",
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
          uuid: "07fde172-077c-46c8-b6f0-bbdf25c7f33f",
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
          uuid: "2ace9bf2-5653-4381-869a-6cd4daf3a569",
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
          uuid: "6d225c5c-994b-49fd-bf27-d02e2acb8040",
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
          uuid: "cdc7782d-6207-4091-83ee-38562873557c",
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
          uuid: "7b93b61d-a666-47d6-a7f3-02be8e3e9058",
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
          uuid: "48f73ece-e27c-4ef0-b7ee-91ba4593f75b",
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
          uuid: "b24fffd2-557f-4e88-b2d6-8702e2dbb9c3",
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
          uuid: "a46438d3-c0c0-45e0-bd71-148fd3b5c2ee",
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
          uuid: "42978ea1-8835-4874-943a-50f9f10d7107",
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
          uuid: "bf6b468c-0bb3-46ef-831a-1852717420cc",
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
          uuid: "b3a3dcae-068e-4b76-a1ae-562baf27d54c",
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
          uuid: "5d71366b-414a-4464-8a19-584f8e036fa2",
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
          uuid: "92048757-7dcf-4c2b-ab49-6bc8324dd205",
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
