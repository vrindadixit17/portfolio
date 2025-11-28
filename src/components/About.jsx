// src/components/About.jsx
import React from "react";

// your center polaroid image
import centerImg from "../assets/about me center.png"; 
// replace with your actual image inside assets

export default function About() {
  const swatches = [
    "var(--pink)",
    "var(--sky)",
    "var(--coral)",
    "var(--neon)",
    "var(--lav)",
    "var(--pink)"
  ];

  return (
    <section id="about" className="pt-10 pb-20">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center relative">
        
        {/* LEFT TEXT */}
        <div className="text-center md:text-right px-6 md:pr-10 leading-relaxed text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur.
          </p>
        </div>

        {/* CENTER BIG TEXT + STACKED IMAGE */}
        <div className="relative flex flex-col items-center justify-center">
          {/* BIG NAME */}
          <h1 className="font-bebas text-[22vw] md:text-[12rem] leading-none text-[var(--blue)] text-center">
            VRINDA<br />DIXIT
          </h1>

          

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left px-6 md:pl-10 leading-relaxed text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur.
          </p>
        </div>

      </div>

      {/* COLOR SWATCHES */}
      <div className="mt-20 flex justify-center gap-6 overflow-x-auto px-4">
        {swatches.map((c, i) => (
          <div
            key={i}
            className="w-28 h-36 md:w-32 md:h-40 rounded-xl flex-shrink-0"
            style={{ background: c }}
          ></div>
        ))}
      </div>

    </section>
  );
}
