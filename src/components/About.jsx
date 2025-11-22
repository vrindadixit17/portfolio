import React from "react";
import { motion } from "framer-motion";

// Import your card images
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";

const cards = [c1, c2, c3, c4, c5, c6];

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

      {/* CENTER FAN ANIMATION */}
      <div className="relative mt-[-180px] w-[300px] h-[300px] group">
        {cards.map((c, i) => (
          <motion.img
            key={i}
            src={c}
            className="absolute left-1/2 top-1/2 w-[180px] h-[240px] object-cover rounded-xl shadow-xl"
            initial={{
              x: "-50%",
              y: "-50%",
              rotate: 0,
            }}
            whileHover={{
              rotate: (i - 3) * 12,       // spreads left & right
              x: `${(i - 3) * 22}px`,     // move outward
              y: `${(Math.abs(i - 3) * -8)}px`,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            whileTap={{
              scale: 1.05
            }}
          />
        ))}
      </div>

      {/* LEFT + RIGHT LOREM TEXT */}
      <div className="w-full max-w-7xl mt-10 flex justify-between px-20 text-[#222] text-[14px] leading-relaxed">
        <p className="max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p className="max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
    </section>
  );
};

export default About;
