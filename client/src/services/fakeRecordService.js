import * as speciesAPI from "./fakeSpeciesService";

const records = [
  {
    uuid: "e72224ab-d263-45a0-b854-e66e4fd20be8",
    date: "10.04.2021 20:21:30",
    turbine: "1",
    bat: true,
    species: {
      uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
      name: "Nyctalus noctula",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "cd0c279e-600c-4f0f-b986-cfb74a14ea28",
    date: "10.04.2021 20:23:55",
    turbine: "2",
    bat: false,
    species: {
      uuid: "92f4b9c3-7a67-4639-a2ef-c751e3aafa98",
      name: "Unrecognised",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "07fde172-077c-46c8-b6f0-bbdf25c7f33f",
    date: "10.04.2021 20:26:21",
    turbine: "3",
    bat: true,
    species: {
      uuid: "a86d989a-336b-421b-9c45-8010c63d6125",
      name: "Eptesicus sp.",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "2ace9bf2-5653-4381-869a-6cd4daf3a569",
    date: "10.04.2021 20:29:30",
    turbine: "1",
    bat: true,
    species: {
      uuid: "d670f2a1-4e06-493e-a81e-f04ef51577d7",
      name: "Pipistrellus nathusii",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "6d225c5c-994b-49fd-bf27-d02e2acb8040",
    date: "10.04.2021 20:31:10",
    turbine: "3",
    bat: false,
    species: {
      uuid: "92f4b9c3-7a67-4639-a2ef-c751e3aafa98",
      name: "Unrecognised",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "cdc7782d-6207-4091-83ee-38562873557c",
    date: "10.04.2021 20:33:34",
    turbine: "2",
    bat: true,
    species: {
      uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
      name: "Nyctalus noctula",
    },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "7b93b61d-a666-47d6-a7f3-02be8e3e9058",
    date: "10.04.2021 20:21:30",
    turbine: "2",
    bat: true,
    species: {
      uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
      name: "Nyctalus noctula",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "48f73ece-e27c-4ef0-b7ee-91ba4593f75b",
    date: "10.04.2021 20:23:55",
    turbine: "1",
    bat: false,
    species: {
      uuid: "92f4b9c3-7a67-4639-a2ef-c751e3aafa98",
      name: "Unrecognised",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "b24fffd2-557f-4e88-b2d6-8702e2dbb9c3",
    date: "10.04.2021 20:26:21",
    turbine: "3",
    bat: true,
    species: {
      uuid: "a86d989a-336b-421b-9c45-8010c63d6125",
      name: "Eptesicus sp.",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "a46438d3-c0c0-45e0-bd71-148fd3b5c2ee",
    date: "10.04.2021 20:33:34",
    turbine: "1",
    bat: true,
    species: {
      uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
      name: "Nyctalus noctula",
    },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "42978ea1-8835-4874-943a-50f9f10d7107",
    date: "10.04.2021 20:21:30",
    turbine: "2",
    bat: true,
    species: {
      uuid: "e6790fbf-ae63-4074-848e-8343024977c3",
      name: "Nyctalus leisleri",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "bf6b468c-0bb3-46ef-831a-1852717420cc",
    date: "10.04.2021 20:23:55",
    turbine: "3",
    bat: false,
    species: {
      uuid: "92f4b9c3-7a67-4639-a2ef-c751e3aafa98",
      name: "Unrecognised",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "b3a3dcae-068e-4b76-a1ae-562baf27d54c",
    date: "10.04.2021 20:26:21",
    turbine: "3",
    bat: true,
    species: {
      uuid: "d670f2a1-4e06-493e-a81e-f04ef51577d7",
      name: "Pipistrellus nathusii",
    },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "5d71366b-414a-4464-8a19-584f8e036fa2",
    date: "10.04.2021 20:33:34",
    turbine: "1",
    bat: true,
    species: {
      uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
      name: "Nyctalus noctula",
    },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    uuid: "92048757-7dcf-4c2b-ab49-6bc8324dd205",
    date: "10.04.2021 20:23:55",
    turbine: "1",
    bat: true,
    species: {
      uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
      name: "Nyctalus noctula",
    },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
];

export function getRecords() {
  return records;
}

export function getRecord(id) {
  return records.find((r) => r.uuid === id);
}

export function saveRecord(record) {
  let recordInDb = records.find((r) => r.uuid === record.uuid) || {};
  recordInDb.date = record.date;
  recordInDb.turbine = record.turbine;
  recordInDb.bat = record.bat;
  recordInDb.species = speciesAPI.species.find(
    (r) => r.uuid === record.speciesId
  );
  recordInDb.species = record.species;
  recordInDb.turbineStopSignal = record.turbineStopSignal;
  recordInDb.verification = record.verification;
  recordInDb.audio = record.audio;
  recordInDb.sonogram = record.sonogram;

  if (!recordInDb.uuid) {
    recordInDb.uuid = Date.now();
    records.push(recordInDb);
  }

  return recordInDb;
}

export function deleteRecord(id) {
  let recordInDb = records.find((m) => m.uuid === id);
  records.splice(records.indexOf(recordInDb), 1);
  return recordInDb;
}
