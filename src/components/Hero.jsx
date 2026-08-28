import { Github } from "@animateicons/react/huge";
import {
  ArrowRight,
  ChevronDownIcon,
  ChevronRightIcon,
  Instagram,
  LinkedinIcon,
} from "@animateicons/react/lucide";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const socials = [
    <Github size={20} />,
    <LinkedinIcon size={20} />,
    <Instagram size={20} />,
  ];

  const ctaPrimaryRef = useRef(null);
  const ctaSecondaryRef = useRef(null);
  const scrollIconRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      scrollIconRef.current?.startAnimation();
    };
    animate();
    const interval = setInterval(animate, 1500);
    return () => clearInterval(interval);
  }, []);

  const Ctas = ({ label, href, icon: Icon, isPrimary, iconRef }) => {
    return (
      <a
        onMouseEnter={() => iconRef.current?.startAnimation()}
        onMouseLeave={() => iconRef.current?.stopAnimation()}
        href={href}
        className={`flex items-center justify-between rounded-full pl-5 pr-2 py-2 z-10 ${isPrimary ? "bg-foreground text-background min-w-48" : "border border-muted/40 min-w-sm"}`}
      >
        <p className="font-poppins">{label}</p>
        <span
          className={`rounded-full p-3 ${isPrimary ? "text-foreground bg-background" : "bg-subtle"}`}
        >
          <Icon size={20} ref={iconRef} />
        </span>
      </a>
    );
  };

  return (
    <section className="min-h-screen">
      {/* Main Container */}
      <div className="flex flex-col justify-center items-center">
        {/* Hero */}
        <div className="relative grid grid-cols-2 flex-1 justify-center items-center">
          {/* Left */}
          <div className="flex flex-col h-180 justify-end px-8">
            <div className="flex gap-1">
              <p className="text-muted tracking-wide font-poppins">Hello!</p>
              <span className="text-foreground font-poppins">My name is</span>
            </div>
            <h1 className="text-[10rem] whitespace-nowrap leading-none font-sulphur text-accent">
              Aryan
            </h1>
            <span className="self-end mb-7 text-[10rem] whitespace-nowrap leading-none font-sulphur text-foreground">
              Singh
            </span>
          </div>
          {/* Divider */}
          <div className="absolute left-1/2 w-px h-full rounded-full bg-muted/20" />
          {/* Right */}
          <div className="h-180 flex-1 px-8 py-5">
            <div className="relative w-full h-full rounded-4xl overflow-clip">
              <img
                src="/portrait.png"
                alt="Portrait"
                className="w-full h-full object-cover object-center"
              />
              {/* Socials */}
              <div className="absolute inset-5 flex justify-end items-end flex-col gap-2">
                {socials.map((icon, idx) => (
                  <a
                    className="rounded-full bg-surface p-3 border border-border text-foreground hover:bg-accent hover:text-background transition-colors duration-200"
                    href=""
                    key={idx}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTAs */}
      <div className="relative flex gap-4 items-center justify-end max-w-[80vw] mx-auto p-8">
        {/* Gradient Border */}
        <div className="absolute inset-0 z-0 bg-linear-to-b from-border to-transparent p-px rounded-4xl">
          <div className="h-full w-full rounded-4xl bg-background" />
        </div>
        {/* Scroll Indicator */}
        <div className="z-10 mr-auto flex items-center justify-center gap-2">
          <p>Scroll Down</p>
          <span>
            <ChevronDownIcon ref={scrollIconRef} />
          </span>
        </div>
        <Ctas
          label="View My Works"
          icon={ChevronRightIcon}
          href=""
          isPrimary={false}
          iconRef={ctaSecondaryRef}
        />
        <Ctas
          label="Contact Me"
          icon={ArrowRight}
          href=""
          isPrimary={true}
          iconRef={ctaPrimaryRef}
        />
      </div>
    </section>
  );
};

export default Hero;
