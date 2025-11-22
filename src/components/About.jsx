import React from "react";
import { motion } from "framer-motion";

const colors = [
  "#000000", // black
  "#FF7EDF", // pink
  "#95C1FF", // blue-lavender
  "#E3FF3D", // yellow-green
  "#B49CFF", // light purple
  "#FF6A4A", // orange
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#FDF9F5] flex flex-col justify-start items-center pt-20"
    >
      {/* BIG TITLE */}
      <h1 className="text-[150px] leading-[120px] font-[Tahoma] text-[#5862E9] font-extrabold text-center">
        VRINDA <br /> DIXIT
      </h1>

      {/* FAN ANIMATION — COLOR CARDS */}
      <div className="relative mt-[-180px] w-[300px] h-[300px] group">
        {colors.map((clr, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-[180px] h-[240px] rounded-xl shadow-xl"
            style={{ backgroundColor: clr }}
            initial={{
              x: "-50%",
              y: "-50%",
              rotate: 0,
            }}
            whileHover={{
              rotate: (i - 3) * 12, // spread left/right
              x: `${(i - 3) * 22}px`,
              y: `${(Math.abs(i - 3) * -8)}px`,
              transition: { duration: 0.5, type: "spring" },
            }}
          />
        ))}
      </div>

      {/* LEFT + RIGHT TEXT BLOCKS */}
      <div className="w-full max-w-7xl mt-10 flex justify-between px-20 text-[#222] text-[14px] leading-relaxed">
        <p className="max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p className="max-w-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default About;
