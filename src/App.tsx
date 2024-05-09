import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About/About";

import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const togleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
