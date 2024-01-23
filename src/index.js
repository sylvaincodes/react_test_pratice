import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
import "./assets/scss/style.scss";

const nodeTarget = document.querySelector("#root");
const root = ReactDOM.createRoot(nodeTarget);
const theme = createTheme({
  palette: {
    text: {
      white: "white",
      gray: "rgb(87 86 86 / 60%)",
    },
    background: {
      dark: "black",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
