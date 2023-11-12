import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./navBar";
import auth from "../services/authService";

export default function Root() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = auth.getCurrentUser();
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <div>
      <ToastContainer />
      <NavBar user={user} />
      {/* <main className="container">
        <Outlet />
      </main> */}
    </div>
  );
}
