import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import Home from "./pages/Home";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
);
