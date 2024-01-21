"use strict";

/** @type {import('sequelize-cli').Migration} */
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
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:06:49",
          updatedAt: "2022-07-27 21:12:58",
        },
        {
          date: "2020-04-10 18:23:55",
          turbineId: 1,
          bat: false,
          speciesId: 2,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:07:54",
          updatedAt: "2022-07-27 21:10:54",
        },
        {
          date: "2020-04-10 20:26:21",
          turbineId: 1,
          bat: true,
          speciesId: 3,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
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
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:13:51",
          updatedAt: "2022-07-27 21:17:23",
        },
        {
          date: "2020-04-10 20:31:10",
          turbineId: 1,
          bat: false,
          speciesId: 5,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:14:00",
          updatedAt: "2022-07-27 21:15:28",
        },
        {
          date: "2020-04-10 20:33:34",
          turbineId: 1,
          bat: true,
          speciesId: 7,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:15:03",
          updatedAt: "2022-07-27 21:16:08",
        },
        {
          date: "2020-04-10 20:21:30",
          turbineId: 1,
          bat: true,
          speciesId: 14,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:15:09",
          updatedAt: "2022-07-27 21:16:12",
        },
        {
          date: "2020-04-10 20:23:55",
          turbineId: 1,
          bat: false,
          speciesId: 10,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:15:29",
          updatedAt: "2022-07-27 21:16:52",
        },
        {
          date: "2020-04-10 20:26:21",
          turbineId: 1,
          bat: true,
          speciesId: 12,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:15:36",
          updatedAt: "2022-07-27 21:16:59",
        },
        {
          date: "2020-04-10 20:33:34",
          turbineId: 1,
          bat: true,
          speciesId: 4,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:15:41",
          updatedAt: "2022-07-27 21:17:11",
        },
        {
          date: "2020-04-10 20:21:30",
          turbineId: 1,
          bat: true,
          speciesId: 5,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:15:54",
          updatedAt: "2022-07-27 21:17:26",
        },
        {
          date: "2020-04-10 20:23:55",
          turbineId: 1,
          bat: false,
          speciesId: 1,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:16:04",
          updatedAt: "2022-07-27 21:17:34",
        },
        {
          date: "2020-04-10 20:26:21",
          turbineId: 1,
          bat: true,
          speciesId: 13,
          turbineStopSignal: false,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:16:09",
          updatedAt: "2022-07-27 21:17:39",
        },
        {
          date: "2020-04-10 20:33:34",
          turbineId: 1,
          bat: true,
          speciesId: 8,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
          createdAt: "2022-07-27 21:16:19",
          updatedAt: "2022-07-27 21:17:52",
        },
        {
          date: "2020-04-10 20:23:55",
          turbineId: 1,
          bat: true,
          speciesId: 12,
          turbineStopSignal: true,
          verification: true,
          audio: "[WAV]",
          spectrogram: "[PNG]",
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
  },
};
