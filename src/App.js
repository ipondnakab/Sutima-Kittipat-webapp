import React from "react";
import logo from "./logo.svg";
//components
import Navbar from "./components/Navbar";
import PostComponent from "./components/PostComponent";
import PublicPage from "./screens/PublicPage";
import { ButtonS1 } from "./components/ButonStyle";

//style
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar
        showMenu={false}
        menu={
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ButtonS1 text="Register" />
            <ButtonS1 text="Login" style = {{marginLeft: 10}}/>
          </div>
        }
      />
      <PublicPage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
