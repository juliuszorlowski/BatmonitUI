import { ToastContainer } from "react-toastify";
import NavBar from "./navBar";

export default function Root() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      {/* <main className="container">
        <Outlet />
      </main> */}
    </div>
  );
}
