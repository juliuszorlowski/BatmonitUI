import { ToastContainer } from "react-toastify";
import NavBar from "./navBar";

function Root() {
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

export default Root;
