import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
