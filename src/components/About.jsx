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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* CENTER BLOCK */}
        <div className="relative flex flex-col items-center justify-center">

          {/* VRINDA DIXIT — EXACTLY LIKE YOUR REFERENCE */}
          <h1
          className="
            bebas-figma
            text-[20vw] md:text-[11rem]
            leading-[0.75]
            tracking-[-0.01em]
            text-center
            text-[var(--blue)]
            select-none
          "
        >
          VRINDA<br/>DIXIT
        </h1>



          {/* CENTER IMAGE (polaroid PNG) */}
          <img
            src={centerImg}
            className="absolute top-1/2 -translate-y-[60%] w-32 md:w-52 rotate-[3deg] drop-shadow-xl select-none"
            alt="center"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left px-6 md:pl-10 leading-relaxed text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

      </div>

      {/* FULL WIDTH CONTINUOUS MOVING COLOR STRIP */}
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
