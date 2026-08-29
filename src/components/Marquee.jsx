import { motion } from "framer-motion";
import React from "react";

const marq1 = ["DESIGN", "CODE", "MOTION", "DIGITAL EXPERIENCES"];
const marq2 = ["CURIOUS BY DEFAULT", "ALWAYS BUILDING", "NEVER SETTLING"];

const MarqContent = () => {
  return (
    <>
      {marq1.map((text, idx) => (
        <React.Fragment key={idx}>
          <span className="font-poppins text-3xl lg:text-6xl">{text}</span>
          <img src="/favicon.svg" alt="icon" className="w-10 h-10 lg:w-18 lg:h-18" />
        </React.Fragment>
      ))}
    </>
  );
};

const MarqContent2 = () => {
  return (
    <>
      {marq2.map((text, idx) => (
        <React.Fragment key={idx}>
          <span className="font-poppins text-4xl lg:text-7xl">{text}</span>
          <img src="/favicon.svg" alt="icon" className="w-12 h-12 lg:w-20 lg:h-20" />
        </React.Fragment>
      ))}
    </>
  );
};

const Marquee = () => {
  return (
    <section className="h-[50vh] bg-foreground overflow-hidden pt-20">
      {/* Marquee 1 */}
      <div className="rotate-6">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="bg-background flex gap-6 w-max"
        >
          <MarqContent />
          <MarqContent />
        </motion.div>
      </div>
      {/* Marquee 2 */}
      <div className="-rotate-6 ">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
          className="bg-background flex gap-6 w-max"
        >
          <MarqContent2 />
          <MarqContent2 />
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
