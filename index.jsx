import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import "reboot.css";
import App from "./src/App";

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("app")
);
