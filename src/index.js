import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./i18n";
import "./styles/index.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Routes>
        <Route 
          exact 
          path="/" 
          element={<Home color={"var(--green)"} />} />
        <Route
          exact
          path="/contact"
          element={<Contact color={"var(--cyan"} />}
        />
        <Route exact path="/about" element={<About color={"var(--violet)"} />} />
        <Route
          exact
          path="/projects"
          element={<Projects color={"var(--pink)"} />}
        />
        <Route path="*" element={<Home color={"var(--green)"} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
