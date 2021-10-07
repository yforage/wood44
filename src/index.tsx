import React from "react";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
