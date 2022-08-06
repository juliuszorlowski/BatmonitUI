import http from "./httpService";

export function getSpecies() {
  return http.get("http://localhost:3900/api/species");
}
