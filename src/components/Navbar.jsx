import React from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const navlinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];
  const location = useLocation();
  return (
    <section className="relative py-8 px-6 flex justify-between items-center max-w-[75vw] mx-auto">
      {/* Gradient Border */}
      <div className="absolute inset-0 z-0 bg-linear-to-t from-border to-transparent p-px rounded-4xl">
        <div className="h-full w-full rounded-4xl bg-background" />
      </div>
      {/* Left Nav */}
      <div className="flex justify-center items-center gap-2.5 z-10">
        {/* Pulsing Badge */}
        <div className="w-3 h-3 relative rounded-full">
          <div className="relative w-2.5 h-2.5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
          <div className="absolute inset-0 rounded-full bg-accent animate-ping" />
        </div>
        <span>New Delhi, India</span>
      </div>
      {/* Nav Links */}
      <div className="flex justify-center items-center gap-5 z-10">
        {navlinks.map((nav) => {
          const isActive = location.pathname === nav.path;
          return (
            <Link
              key={nav.path}
              to={nav.path}
              className={`appearance-none outline-none font-poppins text-sm tracking-wide ${isActive ? "text-accent" : ""}`}
            >
              {nav.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Navbar;
