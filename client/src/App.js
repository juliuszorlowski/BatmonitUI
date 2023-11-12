import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Root from "./components/root";
import Species from "./components/species";
import Turbines from "./components/turbines";
import Records from "./components/records";
import NotFound from "./components/notFound";
import RecordDetails from "./components/recordDetails";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Root />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/records/:id" component={RecordDetails} />
          <Route path="/records" component={Records} />
          <Route path="/species" component={Species} />
          <Route path="/turbines" component={Turbines} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" render={() => <Redirect to="/records" />} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
