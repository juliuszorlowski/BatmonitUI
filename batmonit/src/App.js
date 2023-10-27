import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Species from "./components/species";
import Turbines from "./components/turbines";
import Records from "./components/records";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RecordDetails from "./components/recordDetails";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/records/:id" component={RecordDetails}></Route>
          <Route path="/records" component={Records}></Route>
          <Route path="/species" component={Species}></Route>
          <Route path="/turbines" component={Turbines}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" render={() => <Redirect to="/records" />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
