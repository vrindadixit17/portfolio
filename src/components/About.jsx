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

      {/* TOP NAV BAR */}
      <div className="flex justify-end gap-8 mb-6 font-semibold text-sm tracking-wide">
        <a href="#home">HOME</a>
        <a
          href="#about"
          className="px-3 py-1 rounded-md text-white"
          style={{ background: "var(--pink)" }}
        >
          ABOUT
        </a>
        <a href="#works">WORKS</a>
        <a href="#services">SERVICES</a>
        <a href="#works">WORKS</a>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center relative">

        {/* LEFT TEXT */}
        <div className="text-center md:text-right px-6 md:pr-10 leading-relaxed text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CENTER BIG TEXT + CENTER IMAGE */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* SMALLER BIG TEXT */}
          <h1 className="font-bebas text-[16vw] md:text-[8rem] leading-none text-[var(--blue)] text-center select-none">
            VRINDA<br />DIXIT
          </h1>

          {/* SMALLER CENTER IMAGE */}
          <img
            src={centerImg}
            className="absolute top-1/2 -translate-y-1/2 w-40 md:w-52 select-none"
            alt="about-center"
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
