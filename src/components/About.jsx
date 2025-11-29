// src/components/About.jsx
import React from "react";
import centerImg from "../assets/about me center.png"; // your PNG

export default function About() {
  const swatches = [
    "var(--pink)",
    "var(--sky)",
    "var(--coral)",
    "var(--neon)",
    "var(--lav)",
    "var(--pink)",
    "var(--sky)",
    "var(--coral)",
    "var(--neon)",
  ];

  return (
    <section id="about" className="pt-10 pb-20">

      

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center relative">

        {/* LEFT TEXT */}
        <div className="text-center md:text-right px-6 md:pr-10 leading-relaxed text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CENTER BLOCK */}
<div className="relative flex flex-col items-center justify-center">

  {/* VRINDA — COMPACT */}
  <div className="flex gap-[0.6vw] md:gap-2 font-bebas text-[100vw] md:text-[12rem] leading-[0.8] text-[var(--blue)] select-none tracking-[-0.04em]">
    {["V","R","I","N","D","A"].map((letter, i) => (
      <span key={i}>{letter}</span>
    ))}
  </div>

  {/* DIXIT — COMPACT */}
  <div className="flex gap-[0.6vw] md:gap-2 font-bebas text-[100vw] md:text-[12rem] leading-[0.8] text-[var(--blue)] select-none tracking-[-0.04em] -mt-[0.5vw]">
    {["D","I","X","I","T"].map((letter, i) => (
      <span key={i}>{letter}</span>
    ))}
  </div>

  {/* CENTER IMAGE */}
  <img
    src={centerImg}
    className="absolute top-1/2 -translate-y-[55%] w-28 md:w-40 select-none"
    alt="center"
  />
</div>



        {/* RIGHT TEXT */}
        <div className="text-center md:text-left px-6 md:pl-10 leading-relaxed text-sm">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

      </div>

      {/* FULL WIDTH CONTINUOUS-MOVING BENTO COLOR STRIP */}
      <div className="overflow-hidden mt-20 w-full">
        <div className="flex animate-scroll gap-6 py-4">
          {swatches.concat(swatches).map((c, i) => (
            <div
              key={i}
              className="w-28 h-36 md:w-32 md:h-40 rounded-xl flex-shrink-0"
              style={{ background: c }}
            ></div>
          ))}
        </div>
      </div>

    </section>
  );
}
