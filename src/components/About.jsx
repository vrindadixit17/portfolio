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
      {/* TOP NAV BAR FOR THIS SECTION */}
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

          {/* STACKED CARDS */}
          <div className="absolute top-1/2 -translate-y-1/2">
            <div className="relative w-44 h-56">
              {/* background tilted layers */}
              <div className="absolute inset-0 bg-[var(--pink)] rounded-xl rotate-[-10deg] scale-110"></div>
              <div className="absolute inset-0 bg-[var(--lav)] rounded-xl rotate-[8deg] scale-105"></div>

              {/* main polaroid */}
              <div className="absolute inset-0 bg-[var(--pink)] rounded-xl p-3 shadow-lg rotate-[3deg]">
                <img
                  src={centerImg}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

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
