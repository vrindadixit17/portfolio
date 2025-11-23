import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const colors = [
  "#1C1C1C",
  "#FF7EDF",
  "#8FA7FF",
  "#D6FF3E",
  "#B69CFF",
  "#FF755A",
  "#1C1C1C",
  "#FF70D4",
];

const About = () => {
  const aboutRef = useRef(null);
  const worksRef = document.getElementById("works");

  // useScroll reference for ABOUT → WORKS distance
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end start"], 
  });

  // For each card, create its own scroll-driven transform
  const cardTransforms = colors.map((c, i) => {
    const stackX = (i - 3.5) * 12; // tighter stack
    const stackR = (i - 3.5) * 10;

    const lineX = (i - 3.5) * 240; // faster spread


    const x = useTransform(scrollYProgress, [0, 1], [stackX, lineX]);
    const rotate = useTransform(scrollYProgress, [0, 1], [stackR, 0]);

    return { x, rotate };
  });

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen bg-[#FDF9F5] pt-32 flex flex-col items-center pb-20"
    >
      {/* TITLE */}
      <h1
        className="text-[180px] leading-[160px] text-[#5862E9] font-extrabold text-center mb-12"
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
      >
        VRINDA <br /> DIXIT
      </h1>

      {/* CARD ANIMATION */}
      <div className="relative h-[260px] flex justify-center w-full select-none">
        {colors.map((c, i) => (
          <motion.div
            key={i}
            className="absolute w-[150px] h-[200px] rounded-xl shadow-lg"
            style={{
              backgroundColor: c,
              x: cardTransforms[i].x,
              rotate: cardTransforms[i].rotate,
            }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
