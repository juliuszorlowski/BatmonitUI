export const species = [
  { _id: "cd471816", name: "Unrecognised" },
  { _id: "cd471818", name: "Nyctalus noctula" },
  { _id: "cd471814", name: "Eptesicus sp." },
  { _id: "cd471820", name: "Pipistrellus nathusii" },
  { _id: "cd471822", name: "Nyctalus leisleri" },
];

export function getSpecies() {
  return species.filter((s) => s);
}
