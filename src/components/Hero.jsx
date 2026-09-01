import { ChevronRight, Github } from "@animateicons/react/huge";
import {
  ArrowDown,
  ArrowRight,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsRight,
  Instagram,
  LinkedinIcon,
} from "@animateicons/react/lucide";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { href } from "react-router";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/Aryan181005" },
    {
      icon: <LinkedinIcon size={20} />,
      href: "https://linkedin.com/in/aryan181005",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/aryxn.1810/",
    },
  ];

  const ctaPrimaryRef = useRef(null);
  const ctaSecondaryRef = useRef(null);
  const scrollIconRef = useRef(null);
  const linkedinRef = useRef(null);

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
        className={`flex items-center justify-between rounded-full pl-5 pr-2 py-2 z-10 ${isPrimary ? "bg-foreground text-background min-w-[80vw] lg:min-w-64" : "border border-muted/40 min-w-[80vw] lg:min-w-sm"}`}
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

  const isMobile = useState(window.innerWidth < 769);

  // GSAP

  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const helloRef = useRef(null);
  const imgRef = useRef(null);
  const ctaRef = useRef(null);
  const dividerRef = useRef(null);
  const videoRef = useRef(null);
  const sloganRef = useRef(null);
  const sloganLinesRef = useRef([]);
  const linkedinButtonRef = useRef(null);

  // Hero to CTA
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    tl
      // BG Video
      .fromTo(
        videoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          ease: "power4.out",
        },
      )
      // hello line
      .fromTo(
        helloRef.current.children,
        {
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.4,
          duration: 1.2,
        },
        "-=1.8",
      )
      // name
      .fromTo(
        nameRef.current.children,
        {
          // xPercent: -100,
          opacity: 0,
          yPercent: 20,
          filter: "blur(12px)",
        },
        {
          // xPercent: 0,
          opacity: 1,
          yPercent: 0,
          stagger: 0.08,
          filter: "blur(0px)",
          duration: 1.2,
        },
        "-=1.5",
      )
      // surname
      .fromTo(
        surnameRef.current.children,
        {
          // xPercent: -100,
          yPercent: 20,
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          // xPercent: 0,
          yPercent: 0,
          opacity: 1,
          stagger: 0.08,
          filter: "blur(0px)",
          duration: 1.2,
        },
        "-=1.28",
      )
      // Hero image
      .fromTo(
        imgRef.current,
        {
          filter: "blur(12px)",
          scale: 0.9,
          opacity: 0,
        },
        {
          filter: "blur(0px)",
          scale: 1,
          opacity: 1,
          duration: 1.2,
        },
        "-=0.8",
      )
      // divider
      .fromTo(
        dividerRef.current,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1,
        },
        "-=1",
      )
      // CTA Container
      .fromTo(
        ctaRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
        },
        "-=1",
      );
  }, []);

  // Slogan
  useGSAP(() => {
    // Slogan Div
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sloganRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Slogan lines
    tl.fromTo(
      sloganLinesRef.current,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
      },
    )
      // LinkedIn Button
      .fromTo(
        linkedinButtonRef.current,
        {
          x: -150,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        },
        "-=1.5",
      );
  }, {scope: sloganRef});

  return (
    <section className="relative min-h-screen pb-20">
      {/* BG Video */}
      <video
        ref={videoRef}
        src="/background.mp4"
        loop
        autoPlay
        playsInline
        muted
        preload="auto"
        className="absolute inset-0 z-[-999] h-full w-full object-cover object-center pointer-events-none blur-sm"
      />
      {/* Main Container */}
      <div className="flex flex-col justify-center items-center z-10">
        {/* Hero */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 flex-1 justify-center items-center w-[84%]">
          {/* Left */}
          <div className="flex flex-col lg:h-160 mt-15 lg:mt-0 justify-end px-6 lg:px-8">
            <div
              ref={helloRef}
              className="flex gap-1 mb-5 lg:mb-0 text-xs md:text-base"
            >
              <p className="text-muted tracking-wide font-poppins">Hello!</p>
              <span className="text-foreground font-poppins">My name</span>
              <p className="text-muted tracking-wide font-poppins">is</p>
            </div>
            {/* Name */}
            <div className="flex flex-col">
              <h1
                ref={nameRef}
                className="text-8xl md:text-[10rem] font-sulphur text-accent"
              >
                {"Aryan".split("").map((letter, idx) => (
                  <span key={idx} className="inline-block leading-none">
                    {letter}
                  </span>
                ))}
              </h1>
              <h1
                ref={surnameRef}
                className="lg:self-end mb-7 text-8xl md:text-[10rem] whitespace-nowrap leading-none font-sulphur text-foreground"
              >
                {"Singh".split("").map((letter, idx) => (
                  <span key={idx} className="inline-block leading-none">
                    {letter}
                  </span>
                ))}
              </h1>
            </div>
          </div>
          {/* Divider */}
          <div
            ref={dividerRef}
            className="lg:absolute lg:left-1/2 h-px w-[85vw] mx-auto lg:mx-0 lg:w-px lg:h-full rounded-full bg-muted/40"
          />
          {/* Right */}
          <div className="lg:h-160 flex-1 px-5 lg:px-8 py-5">
            {/* Hero Image */}
            <div
              ref={imgRef}
              className="relative w-full h-full rounded-4xl overflow-clip"
            >
              <img
                src="/portrait4.png"
                alt="Portrait"
                className="w-full h-full object-cover object-center"
              />
              {/* Socials */}
              <div className="absolute inset-5 flex justify-end items-end flex-col gap-2">
                {socials.map((icon, idx) => (
                  <a
                    className="rounded-full bg-surface/30 backdrop-blur-sm p-3 border border-border text-foreground hover:bg-accent hover:text-background transition-colors duration-200"
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                  >
                    {icon.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTAs */}
      <div
        ref={ctaRef}
        className="relative flex flex-col lg:flex-row lg:gap-4 gap-8 items-center justify-center lg:justify-end lg:max-w-[80vw] mx-5 lg:mx-auto p-8"
      >
        {/* Gradient Border */}
        <div
          className="
        absolute inset-0
        h-full
        border-t border-l border-r rounded-t-4xl
        border-border
        mask-[linear-gradient(to_bottom,var(--color-background)_0%,transparent_100%)]
        "
        />
        {/* Scroll Indicator */}
        <div className="mr-auto flex items-center justify-center gap-2">
          <p className="font-poppins text-sm">
            <span className="text-muted">Scroll</span> Down
          </p>
          <span>
            <ArrowDown size={14} ref={scrollIconRef} />
          </span>
        </div>
        {/* CTA container */}
        <div className="z-0 flex flex-col lg:flex-row gap-4">
          <Ctas
            label="View My Works"
            icon={ChevronRightIcon}
            href="#projects"
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
      </div>
      {/* Slogan */}
      <div
        ref={sloganRef}
        className="relative flex flex-col-reverse lg:flex-row justify-around items-end z-10 font-poppins w-full pt-30 px-10 lg:px-0"
      >
        {/* LinkedIn Button */}
        <a
          ref={linkedinButtonRef}
          onMouseEnter={() => linkedinRef.current?.startAnimation()}
          onMouseLeave={() => linkedinRef.current?.stopAnimation()}
          rel="noopener noreferrer"
          href="https://linkedin.com/in/aryan181005"
          target="_blank"
          className="group flex items-center justify-between rounded-full pl-5 pr-2 py-2 z-10 border border-muted/40 w-60 mt-12 hover:border-accent/30 mr-auto lg:mr-0"
        >
          <p className="font-poppins group-hover:text-accent duration-300">
            See My LinkedIn
          </p>
          <span className="rounded-full p-3 bg-subtle group-hover:text-background group-hover:bg-accent duration-300">
            <ChevronsRight size={20} ref={linkedinRef} />
          </span>
        </a>
        {/* Slogan */}
        <p className="max-w-102 flex justify-end flex-col text-xl lg:text-3xl">
          {/* masking div */}
          <div className="overflow-hidden self-end">
            {/* Content */}
            <span
              ref={(el) => (sloganLinesRef.current[0] = el)}
              className="block"
            >
              Crafting Thoughtful
            </span>
          </div>
          <div className="overflow-hidden self-start">
            <span
              ref={(el) => (sloganLinesRef.current[1] = el)}
              className="block"
            >
              Digital Experiences{" "}
              <span className="text-muted">Beyond</span>{" "}
            </span>{" "}
          </div>
          <div className="overflow-hidden">
            <span
              ref={(el) => (sloganLinesRef.current[2] = el)}
              className="text-muted block"
            >
              The Expected
            </span>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Hero;
