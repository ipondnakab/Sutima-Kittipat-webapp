import React from "react";
import "./navbar.css";

function Navbar({ showMenu }) {
  showMenu = showMenu ? showMenu : true;
  return (
    <nav className="nav-bar">
      <div className="nav">
        <div className="left-nav">
          <h1>Logo</h1>
        </div>
        <div className="right-nav">
          <a className="icon-navigate">A</a>
          <a className="icon-navigate">B</a>
          <a className="icon-navigate">C</a>
          <a className="icon-navigate">D</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
