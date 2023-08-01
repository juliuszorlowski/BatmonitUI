import http from "./httpService";
import config from "../config.json";

const apiUrl = config.apiUrl;

export function getRecords() {
  return http.get(apiUrl + "/records");
}
