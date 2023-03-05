import http from "./httpService";

export function getRecords() {
  return http.get("http://localhost:3900/api/records");
}
