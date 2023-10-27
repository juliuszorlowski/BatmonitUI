import http from "./httpService";
import config from "../config.json";

const apiUrl = config.apiUrl;

export function getTurbines() {
  return http.get(apiUrl + "/turbines");
}
