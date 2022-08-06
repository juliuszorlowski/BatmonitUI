export const turbines = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Turbine 1" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Turbine 2" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Turbine 3" },
];

export function getTurbines() {
  return turbines.filter((t) => t);
}
