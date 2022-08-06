import * as speciesAPI from "./fakeSpeciesService";

const records = [
  {
    _id: "liiov7psj1",
    date: "10.04.2021 20:21:30",
    turbine: "1",
    bat: true,
    species: { _id: "cd471818", name: "Nyctalus noctula" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "42v61qper4",
    date: "10.04.2021 20:23:55",
    turbine: "2",
    bat: false,
    species: { _id: "cd471816", name: "Unrecognised" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "ro4e5tiayd",
    date: "10.04.2021 20:26:21",
    turbine: "3",
    bat: true,
    species: { _id: "cd471814", name: "Eptesicus sp." },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "cpgpq1uy78",
    date: "10.04.2021 20:29:30",
    turbine: "1",
    bat: true,
    species: { _id: "cd471820", name: "Pipistrellus nathusii" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "hdp27gsdy2",
    date: "10.04.2021 20:31:10",
    turbine: "3",
    bat: false,
    species: { _id: "cd471816", name: "Unrecognised" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "wca6d7og17",
    date: "10.04.2021 20:33:34",
    turbine: "2",
    bat: true,
    species: { _id: "cd471818", name: "Nyctalus noctula" },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "qgvm6soiw7",
    date: "10.04.2021 20:21:30",
    turbine: "2",
    bat: true,
    species: { _id: "cd471818", name: "Nyctalus noctula" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "2rpmc94n0j",
    date: "10.04.2021 20:23:55",
    turbine: "1",
    bat: false,
    species: { _id: "cd471816", name: "Unrecognised" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "mhr10md3xz",
    date: "10.04.2021 20:26:21",
    turbine: "3",
    bat: true,
    species: { _id: "cd471814", name: "Eptesicus sp." },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "ocmqj7bwmk",
    date: "10.04.2021 20:33:34",
    turbine: "1",
    bat: true,
    species: { _id: "cd471818", name: "Nyctalus noctula" },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "m6y3uo5crc",
    date: "10.04.2021 20:21:30",
    turbine: "2",
    bat: true,
    species: { _id: "cd471822", name: "Nyctalus leisleri" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "x4dkmuc6f5",
    date: "10.04.2021 20:23:55",
    turbine: "3",
    bat: false,
    species: { _id: "cd471816", name: "Unrecognised" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "quthoxupzo",
    date: "10.04.2021 20:26:21",
    turbine: "3",
    bat: true,
    species: { _id: "cd471820", name: "Pipistrellus nathusii" },
    turbineStopSignal: false,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "6i8uy8543n",
    date: "10.04.2021 20:33:34",
    turbine: "1",
    bat: true,
    species: { _id: "cd471818", name: "Nyctalus noctula" },
    turbineStopSignal: true,
    verification: true,
    audio: "[WAV]",
    sonogram: "[PNG]",
  },
  {
    _id: "vi3qf8xea6",
    date: "10.04.2021 20:23:55",
    turbine: "1",
    bat: true,
    species: { _id: "cd471818", name: "Nyctalus noctula" },
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
  return records.find((r) => r._id === id);
}

export function saveRecord(record) {
  let recordInDb = records.find((r) => r._id === record._id) || {};
  recordInDb.date = record.date;
  recordInDb.turbine = record.turbine;
  recordInDb.bat = record.bat;
  recordInDb.species = speciesAPI.species.find(
    (r) => r._id === record.speciesId
  );
  recordInDb.species = record.species;
  recordInDb.turbineStopSignal = record.turbineStopSignal;
  recordInDb.verification = record.verification;
  recordInDb.audio = record.audio;
  recordInDb.sonogram = record.sonogram;

  if (!recordInDb._id) {
    recordInDb._id = Date.now();
    records.push(recordInDb);
  }

  return recordInDb;
}

export function deleteRecord(id) {
  let recordInDb = records.find((m) => m._id === id);
  records.splice(records.indexOf(recordInDb), 1);
  return recordInDb;
}
