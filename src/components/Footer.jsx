import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const navlinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  const socials = [
    { label: "Twitter (X)", path: "/" },
    { label: "LinkedIn", path: "/about" },
    { label: "GitHub", path: "/skills" },
    { label: "Instagram", path: "/projects" },
  ];

  return (
    <section className="bg-background text-foreground">
      {/* Footer Hero */}
      <div className="relative overflow-hidden flex justify-center items-center pb-2 bg-foreground ">
        {/* Marquee Text */}
        <motion.h1
          animate={{ x: ["40%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute bg-linear-to-b from-muted/80 from-0% to-transparent to-90% bg-clip-text text-transparent text-8xl lg:text-[20rem] font-poppins font-black whitespace-nowrap leading-none z-0"
        >
          <span>Contact Me Contact Me Contact Me</span>
        </motion.h1>
        {/* Overlay Video */}
        <div className="relative z-10 w-[60vw] h-[30vw] lg:w-[40vw] lg:h-[20vw] rounded-full overflow-hidden">
          <video
            src="/heart.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="h-screen relative lg:overflow-hidden">
        {/* Head */}
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-start lg:items-center font-poppins text-2xl lg:text-5xl px-8 lg:px-16 py-14 lg:py-20 border-b border-border max-w-[90vw] mx-auto">
          <h1 className="text-muted lg:text-foreground">Let's Connect</h1>
          <h1 className="">hello@aryn.com</h1>
        </div>
        {/* Link Grid */}
        <div className="grid grid-cols-1 gap-20 lg:gap-0 lg:grid-cols-6 pt-20 px-20 font-poppins">
          {/* Nav Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-muted mb-5">Menu</h3>
            {navlinks.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                className="text-xl hover:text-accent duration-300"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          {/* Socials */}
          <div className="flex flex-col gap-5">
            <h3 className="text-muted mb-5">Socials</h3>
            {socials.map((nav) => (
              <Link
                key={nav.path}
                to={nav.path}
                className="text-xl hover:text-accent duration-300"
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Foot */}
        <div className="lg:absolute bottom-0 right-0 left-0 px-8 lg:px-16 font-poppins mt-10 lg:mt-0">
          <div className="relative flex justify-end items-start">
            {/* Copyright */}
            <span className="absolute bottom-15 lg:bottom-8 left-0 text-base lg:text-xl">
              {" "}
              &copy; aryn 2026
            </span>
            {/* Giant Logo */}
            <div className="flex gap-1 lg:gap-3 relative items-start mb-12 lg:mb-0">
              <span className="text-[25vw] lg:text-[15vw] tracking-[-0.06em] font-sulphur leading-none">
                aryn
              </span>
              <span className="mt-[2vw] text-[3vw]">tm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
