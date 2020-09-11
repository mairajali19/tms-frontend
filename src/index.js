import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { MuiThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.querySelector("#root")
);
