// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Counters from "./components/counters";

const rootElement = document.getElementById("root");
ReactDOM.render(<Counters />, rootElement);
