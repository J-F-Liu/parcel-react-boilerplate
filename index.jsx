import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import "reboot.css";
import App from "./src/App";

injectGlobal`
  html, body, #app {
    width: 100%;
    height: 100%;
  }
`;

ReactDOM.render(<App />, document.getElementById("app"));
