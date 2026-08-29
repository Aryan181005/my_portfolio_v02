import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import Skills from "./pages/Skills";

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
};

export default App;
