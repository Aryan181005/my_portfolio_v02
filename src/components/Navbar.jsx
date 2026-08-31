import { Menu01, Menu01Icon } from "@animateicons/react/huge";
import { Menu } from "@animateicons/react/lucide";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { Github } from "@animateicons/react/huge";
import { Instagram, LinkedinIcon } from "@animateicons/react/lucide";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const socials = [
    <Github size={20} />,
    <LinkedinIcon size={20} />,
    <Instagram size={20} />,
  ];

  const navlinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  const isMobile = window.innerWidth < 769;

  const [menuOpen, setMenuOpen] = useState(false);

  // GSAP
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "+=1.8"
    );
  }, []);

  return (
    <>
      <section
        ref={navRef}
        className="relative p-6 z-50 flex justify-between items-center max-w-[90vw] lg:max-w-[75vw] mx-auto bg-background rounded-b-4xl"
      >
        {/* Gradient Border */}
        <div
          className="
        absolute inset-0
        h-full
        rounded-b-4xl border-b border-l border-r
        border-border
        mask-[linear-gradient(to_bottom,transparent_0%,var(--color-background)_100%)]
        pointer-events-none"
        />
        {/* Left Nav Desktop Only */}
        {!isMobile && (
          <div className="flex justify-center items-center gap-2.5 z-10">
            {/* Pulsing Badge */}
            <div className="w-3 h-3 relative rounded-full">
              <div className="relative w-2.5 h-2.5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
              <div className="absolute inset-0 rounded-full bg-accent animate-ping" />
            </div>
            <span className="font-poppins text-sm">New Delhi, India</span>
          </div>
        )}
        {/* Logo */}
        <div className="flex gap-1 items-center justify-center">
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-accent"
            fill="none"
          >
            <g stroke="currentColor" strokeWidth="58" strokeLinecap="butt">
              {/* Top-left — shifted UP */}
              <path d="M 100 208 C 175 208 220 163 220 88" />

              {/* Top-right */}
              <path d="M 292 100 C 292 175 337 220 412 220" />

              {/* Bottom-right */}
              <path d="M 412 292 C 337 292 292 337 292 412" />

              {/* Bottom-left — shifted UP */}
              <path d="M 220 400 C 220 325 175 280 100 280" />
            </g>
          </svg>
          <span className="font-sulphur text-xl lg:text-3xl">aryn</span>
        </div>
        {/* Nav Menu Icon */}
        <motion.div
          onTap={() => setMenuOpen(!menuOpen)}
          className="bg-foreground w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <motion.div
            animate={{
              rotate: menuOpen ? -45 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="grid grid-cols-2 gap-0.5"
          >
            {[1, 2, 3, 4].map((div, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 border border-background duration-200 ${menuOpen ? "bg-background" : ""}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Blur Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 z-40 backdrop-blur-md"
            />
            {/* Nav Container */}
            <motion.div
              initial={{
                x: isMobile ? 0 : 40,
                y: isMobile ? -40 : 0,
                opacity: 0,
              }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: isMobile ? 0 : 40, y: isMobile ? -40 : 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className={`absolute ${isMobile ? "left-1/2 -translate-x-1/2" : ""} lg:right-60 mt-2 py-12 px-20 rounded-4xl w-[90vw] lg:w-[30vw] bg-surface z-50 flex flex-col justify-start items-center gap-8`}
            >
              <h1 className="w-full text-lg lg:text-xl text-muted font-poppins border-b border-border pb-2">
                <li>Menu</li>
              </h1>
              {/* nav links */}
              <div className="flex flex-col justify-between items-center gap-3">
                {navlinks.map((nav) => {
                  const isActive = location.pathname === nav.path;
                  return (
                    <Link
                      key={nav.path}
                      to={nav.path}
                      onClick={() => setMenuOpen(false)}
                      className={`font-orbitron text-xl lg:text-4xl ${isActive ? "text-accent underline" : ""}`}
                    >
                      {nav.label}
                    </Link>
                  );
                })}
              </div>
              {/* Socials container */}
              <div className="w-full mt-10">
                <h1 className="font-poppins text-lg lg:text-xl border-b border-border pb-2 text-muted">
                  <li>Socials</li>
                </h1>
                {/* Socials */}
                <div className="flex justify-start items-start gap-2 mt-5">
                  {socials.map((icon, idx) => (
                    <a
                      className="rounded-full bg-surface/30 backdrop-blur-sm p-3 border border-border text-foreground hover:bg-accent hover:text-background transition-colors duration-200"
                      href=""
                      key={idx}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
