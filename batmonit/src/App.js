import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Species from "./components/species";
import Records from "./components/records";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RecordDetails from "./components/recordDetails";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/species" component={Species}></Route>
            <Route path="/records/:id" component={RecordDetails}></Route>
            <Route path="/records" component={Records}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/records" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
