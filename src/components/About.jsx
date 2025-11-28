// src/components/About.jsx
import React from "react";

// import the exact PNG you gave
import centerImg from "../assets/about me center.png";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* CENTER BIG TEXT + IMAGE */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* BIG NAME */}
          <h1 className="font-bebas text-[22vw] md:text-[12rem] leading-none text-[var(--blue)] text-center select-none">
            VRINDA<br />DIXIT
          </h1>

          {/* CENTER PNG */}
          <img
            src={centerImg}
            className="absolute top-1/2 -translate-y-1/2 w-52 md:w-64 select-none"
            alt="about-center"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="text-center md:text-left px-6 md:pl-10 leading-relaxed text-sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit in voluptate velit esse.
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
