import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    async function fetchData() {
      localStorage.removeItem("token");

      window.location = "/";
    }
    fetchData();
  }, []);

  return null;
}
