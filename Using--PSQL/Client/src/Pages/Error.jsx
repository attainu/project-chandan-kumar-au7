import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

function Error() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>OPPS !!! , Looks Like , You Typed Wrong Url ...</p>
        <Link className="App-link" to="/">
          Go_to_HOME
        </Link>
      </header>
    </div>
  );
}

export default Error;
