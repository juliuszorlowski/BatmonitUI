import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Root from "./components/root";
import Species from "./components/species";
import Turbines from "./components/turbines";
import UserForm from "./components/userForm";
import Users from "./components/users";
import Records from "./components/records";
import NotFound from "./components/notFound";
import RecordDetails from "./components/recordDetails";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const user = auth.getCurrentUser();
      setUser(user);
    }
    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Root user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/records/:id" component={RecordDetails} />
            <Route path="/records" component={Records} />
            <Route path="/species" component={Species} />
            <Route path="/turbines" component={Turbines} />
            <Route path="/users/:uuid" component={UserForm} />
            <ProtectedRoute path="/users" component={Users} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" render={() => <Redirect to="/records" />} />
          </Switch>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
