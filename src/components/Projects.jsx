import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ number, role, year, desc, tech, title, bg }) => {
  return (
    <div
      className="
    project-card absolute
    left-1/2 -translate-x-1/2
    w-[95vw] lg:w-[99vw]
    h-[90vh] lg:h-[78%]
    z-10

    grid
    grid-cols-1
    lg:grid-cols-[1fr_30%_1fr]

    gap-8
    lg:gap-12

    px-8 py-6 lg:p-15
    rounded-4xl
    overflow-hidden
    pointer-events-none
    bg-background
    font-poppins
  "
    >
      {/* BG Image */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center blur-xl scale-150 opacity-40"
      />
      {/* Noise Overlay */}
      <img
        src="/projectBg1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-fill opacity-20 mix-blend-overlay"
      />

      {/* Left */}
      <div className="flex justify-between flex-col py-4 lg:py-20 z-10 gap-6 lg:gap-0">
        <p className="max-w-xs text-xs lg:text-sm text-muted">{desc}</p>
        <div className="text-muted text-sm">
          <p className="border-b boreder-b-muted pb-2 w-fit">
            <span className="text-foreground">{number}</span> / 03{" "}
          </p>
          <h1 className="text-foreground text-5xl lg:text-7xl mt-8 font-sulphur font-semibold">
            {title}
          </h1>
        </div>
      </div>

      {/* Center Image */}
      <div className="w-full h-[30dvh] lg:h-full rounded-4xl overflow-hidden border border-muted/40 z-10">
        <img
          src="/project1.avif"
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="text-muted z-10 grid grid-cols-2 lg:grid-cols-1 gap-6 lg:flex lg:justify-between lg:flex-col py-8 lg:py-20">
        <div>
          <p className="text-xs lg:text-sm">Year</p>
          <h3 className="text-foreground text-sm lg:text-lg mt-2">{year}</h3>
        </div>
        <div>
          <p className="text-xs lg:text-sm">Role</p>
          <h3 className="text-foreground text-sm lg:text-lg mt-2">{role}</h3>
        </div>
        <div>
          <p className="text-xs lg:text-sm">Tech Stack</p>
          {tech.map((item, idx) => (
            <h3 key={idx} className="text-foreground text-sm lg:text-lg mt-2">
              {item}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // GSAP
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      gsap.set(cards, {
        y: "100vh",
      });

      gsap.set(cards[0], {
        y: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 1000}`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, idx) => {
        if (idx === cards.length - 1) return;

        const nextCard = cards[idx + 1];

        tl.to(
          card,
          {
            scale: 0.8,
            rotate: 8,
            opacity: 0,
            duration: 1,
          },
          idx,
        );

        tl.to(
          nextCard,
          {
            y: 0,
            duration: 1,
          },
          idx,
        );
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={cardsRef}
      className="bg-foreground text-background relative pt-20 lg:pt-50"
    >
      <h1 className="absolute top-8 lg:-top-1 left-1/2 -translate-x-1/2 text-center text-5xl lg:text-[12rem] whitespace-nowrap bg-linear-to-b from-muted from-0% to-transparent to-85% lg:to-70% bg-clip-text text-transparent font-poppins font-black">
        Recent Works
      </h1>
      <div className="relative h-screen">
        <ProjectCard
          number="01"
          title="Portfolio"
          role="Designer & Developer"
          year="2026"
          desc="A personal portfolio exploring design, development, and interactive
          experiences."
          tech={["React", "TailwindCSS"]}
          bg="/project1.avif"
        />
        <ProjectCard
          number="02"
          title="Nexalgo"
          role="Developer"
          year="2026"
          desc="An interactive algorithm visualizer for understanding sorting algorithms."
          tech={["React", "JavaScript", "TailwindCSS"]}
          bg="/project1.avif"
        />
        <ProjectCard
          number="03"
          title="Church Website"
          role="Designer & Developer"
          year="2026"
          desc="A modern church website designed to provide information, sermons, events, and an engaging digital experience."
          tech={["React", "TailwindCSS", "Framer Motion"]}
          bg="/project1.avif"
        />
      </div>
    </section>
  );
};

export default Projects;
