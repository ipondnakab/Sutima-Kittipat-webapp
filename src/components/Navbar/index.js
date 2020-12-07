import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ menu }) {
  menu = menu === undefined ? true : menu;
  return (
    <nav className="nav-bar">
      <div
        className="nav"
        style={{ justifyContent: menu ? "space-between" : "start" }}
      >
        <div className="left-nav">
          <Link className={"logo"} to="/">
            <h1>Farmacro</h1>
          </Link>
        </div>
        <div className="right-nav" style={{ display: menu ? "flex" : "none" }}>
          {menu ? menu : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
