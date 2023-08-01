import http from "./httpService";
import config from "../config.json";

const apiUrl = config.apiUrl;

export function getSpecies() {
  return http.get(apiUrl + "/species");
}
