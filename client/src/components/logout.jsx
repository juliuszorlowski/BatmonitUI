import { useEffect } from "react";
import auth from "../services/authService";

export default function Logout() {
  useEffect(() => {
    async function fetchData() {
      auth.logout();

      window.location = "/";
    }
    fetchData();
  }, []);

  return null;
}
