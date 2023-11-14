import { ToastContainer } from "react-toastify";
import NavBar from "./navBar";

export default function Root({ user }) {
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
