export const species = [
  {
    _id: "cd471816",
    uuid: "92f4b9c3-7a67-4639-a2ef-c751e3aafa98",
    name: "Unrecognised",
    createdAt: "2022-07-27 21:27:27",
    updatedAt: "2022-07-27 21:27:27",
  },
  {
    _id: "cd471818",
    uuid: "aeccd0f3-2e97-46b0-ab68-30d13c85ba66",
    name: "Nyctalus noctula",
    createdAt: "2022-07-27 21:05:10",
    updatedAt: "2022-07-27 21:05:10",
  },
  {
    _id: "cd471814",
    uuid: "a86d989a-336b-421b-9c45-8010c63d6125",
    name: "Eptesicus sp.",
    createdAt: "2022-07-27 21:05:16",
    updatedAt: "2022-07-27 21:05:16",
  },
  {
    _id: "cd471820",
    uuid: "d670f2a1-4e06-493e-a81e-f04ef51577d7",
    name: "Pipistrellus nathusii",
    createdAt: "2022-07-27 21:27:39",
    updatedAt: "2022-07-27 21:27:39",
  },
  {
    _id: "cd471822",
    uuid: "e6790fbf-ae63-4074-848e-8343024977c3",
    name: "Nyctalus leisleri",
    createdAt: "2022-07-27 21:27:51",
    updatedAt: "2022-07-27 21:27:51",
  },
];

export function getSpecies() {
  return species.filter((s) => s);
}
