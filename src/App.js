import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import PublicPage from "./screens/PublicPage";
import { ButtonS1 } from "./components/ButonStyle";

//style
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar
          menu={
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/login" className="button-style-1">
                Login
              </Link>

              <Link
                to="/register"
                className="button-style-1"
                style={{ marginLeft: 20 }}
              >
                Register
              </Link>
            </div>
          }
        />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <PublicPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
