import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "./src/App";

injectGlobal`
  body {
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById("app"));
