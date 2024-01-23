import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/style.scss";

const nodeTarget = document.querySelector("#root");
const root = ReactDOM.createRoot(nodeTarget);

root.render(<App />);
