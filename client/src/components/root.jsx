import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import NavBar from "./navBar";

export default function Root() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const jwt = localStorage.getItem("token");
        const user = jwtDecode(jwt);
        setUser(user);
      } catch (ex) {}
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
