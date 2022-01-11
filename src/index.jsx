import { render } from "solid-js/web";
// import { Router } from "solid-app-router";
// import { StateProvider } from "./components/StateProvider";
// import type { Component } from "solid-js";
import { lazy, onMount } from "solid-js";
import { Router, Routes, Route } from "solid-app-router";

import styles from "./App.module.css";
import "./styles/globals.css";
import "./styles/custom.scss";

import "./index.css";

const Home = lazy(() => import("./pages/index.jsx"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
  );
};
render(App, document.getElementById("root"));
