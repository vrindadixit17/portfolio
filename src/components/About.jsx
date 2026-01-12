// src/components/About.jsx
import React from "react";
import centerImg from "../assets/about-me-center.png";

export default function About() {
  const swatches = [
    "var(--pink)",
    "var(--sky)",
    "var(--coral)",
    "var(--lav)",
    "var(--neon)",
    "var(--sky)",
    "var(--pink)",
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FBF8F6] pt-28 pb-32 overflow-hidden"
    >
      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-8 md:px-16">

        {/* LEFT TEXT */}
        <div className="text-center md:text-right text-sm leading-relaxed text-[#222] max-w-md mx-auto md:mx-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /><br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* CENTER NAME + IMAGE */}
        <div className="relative flex justify-center items-center my-16 md:my-0">

          {/* BIG NAME */}
          <h1
            className="
              bebas-figma
              text-[22vw] md:text-[12rem]
              leading-[0.7]
              tracking-[-0.02em]
              text-center
              text-[var(--blue)]
              select-none
            "
          >
            VRINDA
            <br />
            DIXIT
          </h1>

          {/* OVERLAY IMAGE */}
          <img
            src={centerImg}
            alt="about"
            className="
              absolute
              w-36 md:w-56
              rotate-[3deg]
              drop-shadow-xl
            "
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left text-sm leading-relaxed text-[#222] max-w-md mx-auto md:mx-0">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </div>

      {/* COLOR STRIP (BENTO ROW) */}
      <div className="mt-32 overflow-hidden w-full">
        <div className="flex gap-8 animate-scroll px-8">
          {swatches.concat(swatches).map((color, i) => (
            <div
              key={i}
              className="w-32 h-44 md:w-36 md:h-48 rounded-2xl flex-shrink-0"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
