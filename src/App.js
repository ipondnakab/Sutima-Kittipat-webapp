import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RiEarthLine, RiEarthFill } from "react-icons/ri";
import { AiOutlineShop, AiFillShop } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import axios from "axios";
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
  useEffect(() => {
    getPost();
    getUserData();
  }, []);

  let [tem, setTem] = useState([
    {
      imageProfile:
        "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
      username: "Kittipat",
      follower: "12.1K",
      imageUrl:
        "https://www.treehugger.com/thmb/bM_zeJcC8UpFkNa39UK69dfoT2w=/735x0/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-crop2-3b8cdbd62aee45f6ab8d49228fa85272.jpg",
      body:
        "Ipsum is simply dummy text of the printing and typesetting industry. Industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ]);

  let [userData, setUserDat] = useState({
    imageCover: "https://wallpaperaccess.com/full/175640.jpg",
    username: "testuser",
    imageProfile:
      "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
  });

  const getPost = () => {
    axios
      .get("https://asia-east2-farmacro-af287.cloudfunctions.net/api/posts/")
      .then((res) => setTem(res.data))
      .catch((err) => console.log(err));
  };

  const getUserData = () => {
    const token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .post(
        "https://asia-east2-farmacro-af287.cloudfunctions.net/api/posts/",
        config
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

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
              <PublicPage tem={tem} setTem={setTem} userData={userData} />
            ) : (
              <RegisterPage setIsLogin={setIsLogin} setPath={setPath} />
            )}
          </Route>
          <Route path="/dashboard">
            {token ? (
              <PublicPage tem={tem} setTem={setTem} userData={userData} />
            ) : (
              <RegisterPage setIsLogin={setIsLogin} setPath={setPath} />
            )}
          </Route>
          <Route path="/profile">
            {token ? (
              <ProfilePage tem={tem} setTem={setTem} userData={userData} />
            ) : (
              <RegisterPage setIsLogin={setIsLogin} setPath={setPath} />
            )}
          </Route>
          <Route path="/market">
            {token ? (
              <MarketPage tem={tem} setTem={setTem} userData={userData} />
            ) : (
              <RegisterPage setIsLogin={setIsLogin} setPath={setPath} />
            )}
          </Route>
          <Route path="/login">
            {token ? (
              <PublicPage tem={tem} setTem={setTem} userData={userData} />
            ) : (
              <LoginPage setIsLogin={setIsLogin} setPath={setPath} />
            )}
          </Route>
          <Route path="/">
            {token ? (
              <PublicPage tem={tem} setTem={setTem} userData={userData} />
            ) : (
              <LoginPage setIsLogin={setIsLogin} setPath={setPath} />
            )}
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
