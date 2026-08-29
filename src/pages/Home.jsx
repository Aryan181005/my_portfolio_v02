import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
