import React, { Profiler, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { RiEarthLine, RiEarthFill } from "react-icons/ri";
import { AiOutlineShop, AiFillShop } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsPerson, BsPersonFill } from "react-icons/bs";

//components
import Navbar from "./components/Navbar";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import PublicPage from "./screens/PublicPage";
import { ButtonS1 } from "./components/ButonStyle";

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
  let history = useHistory();

  return (
    <Router>
      <div>
        <Navbar
          menu={
            isLogin
              ? MenuNavbarOnLogin({ currentPath, setPath, setIsLogin, history })
              : MenuNavbar(isLogin)
          }
        />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            {token ? <PublicPage /> : <RegisterPage setIsLogin={setIsLogin} />}
          </Route>
          <Route path="/login">
            {token ? <PublicPage /> : <LoginPage setIsLogin={setIsLogin} />}
          </Route>
          <Route path="/">
            <PublicPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const MenuNavbarOnLogin = ({ currentPath, setPath, setIsLogin, history }) => {
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
      path: "/",
    },
  ];

  return (
    <div>
      {listMenu.map((item) => {
        return (
          <Link
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              marginLeft: "0.8rem",
              color: "white",
            }}
            to={item.path}
            onClick={() => {
              setPath(item.path);
              if (item.name == "logout") {
                logout({ setIsLogin });
                window.location.pathname = "/login";
                setPath("/login");
              }
            }}
          >
            {currentPath.substring(0, item.path.length) == item.path
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
