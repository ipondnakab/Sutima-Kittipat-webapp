import React from "react";
import "./navbar.css";

function Navbar({ menu }) {
  menu = menu === undefined ? true : menu;
  return (
    <nav className="nav-bar">
      <div
        className="nav"
        style={{ justifyContent: menu ? "space-between" : "start" }}
      >
        <div className="left-nav">
          <h1>Logo</h1>
        </div>
        <div className="right-nav" style={{ display: menu ? "flex" : "none" }}>
          {menu ? menu : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
