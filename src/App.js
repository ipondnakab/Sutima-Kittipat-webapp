import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RiEarthLine, RiEarthFill } from "react-icons/ri";
import { AiOutlineShop, AiFillShop } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsPerson, BsPersonFill } from "react-icons/bs";

//components
import Navbar from "./components/Navbar";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import PublicPage from "./screens/PublicPage";
import ProfilePage from "./screens/ProfilePage";
import MarketPage from "./screens/MarketPage";

//style
import "./App.css";

//function
import { checkToken, logout } from "./assets/functions/auth";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [path, setPath] = useState("/");

  const token = checkToken();
  if (!isLogin && token) {
    setIsLogin(true);
  }
  const currentPath = window.location.pathname;

  return (
    <Router>
      <div>
        <Navbar
          menu={
            isLogin
              ? MenuNavbarOnLogin({
                  currentPath,
                  setPath,
                  setIsLogin,
                })
              : MenuNavbar(isLogin)
          }
        />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            {token ? (
              <PublicPage isLogin={isLogin} />
            ) : (
              <RegisterPage setIsLogin={setIsLogin} />
            )}
          </Route>
          <Route path="/dashboard">
            {token ? <PublicPage /> : <RegisterPage setIsLogin={setIsLogin} />}
          </Route>
          <Route path="/profile">
            {token ? <ProfilePage /> : <RegisterPage setIsLogin={setIsLogin} />}
          </Route>
          <Route path="/market">
            {token ? <MarketPage /> : <RegisterPage setIsLogin={setIsLogin} />}
          </Route>
          <Route path="/login">
            {token ? <PublicPage /> : <LoginPage setIsLogin={setIsLogin} />}
          </Route>
          <Route path="/">
            {token ? <PublicPage /> : <LoginPage setIsLogin={setIsLogin} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const MenuNavbarOnLogin = ({ currentPath, setPath, setIsLogin }) => {
  const listMenu = [
    {
      name: "dashboard",
      icon: <RiEarthLine color="white" />,
      iconActive: <RiEarthFill color="white" />,
      path: "/dashboard",
    },
    {
      name: "market",
      icon: <AiOutlineShop color="white" />,
      iconActive: <AiFillShop color="white" />,
      path: "/market",
    },
    {
      name: "profile",
      icon: <BsPerson color="white" />,
      iconActive: <BsPersonFill color="white" />,
      path: "/profile",
    },
    {
      name: "logout",
      icon: <FiLogOut color="white" />,
      iconActive: <FiLogOut color="white" />,
      path: "/login",
    },
  ];

  return (
    <div>
      {listMenu.map((item, key) => {
        return (
          <Link
            key={key}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              marginLeft: "0.8rem",
              color: "white",
            }}
            to={item.path}
            onClick={() => {
              setPath(item.path);
              if (item.name === "logout") {
                logout({ setIsLogin });
                setPath("/login");
              }
            }}
          >
            {currentPath.substring(0, item.path.length) === item.path
              ? item.iconActive
              : item.icon}
          </Link>
        );
      })}
    </div>
  );
};

const MenuNavbar = (isLogin) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Link to={isLogin ? "/" : "/login"} className="button-style-1">
        Login
      </Link>
      <Link
        to={isLogin ? "/" : "/register"}
        className="button-style-1"
        style={{ marginLeft: 20 }}
      >
        Register
      </Link>
    </div>
  );
};
