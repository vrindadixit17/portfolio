// src/components/About.jsx
import React from "react";

import mainImg from "../assets/about.png";
import smallImg from "../assets/me.png";

import education from "../assets/education.png";
import experience from "../assets/experience.png";
import software from "../assets/software.png";
import misc from "../assets/misc.png";

export default function About() {
  return (
    <section id="about" className="bg-[#FBF8F6] pt-28 pb-32 px-12">

      {/* TOP AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-24 items-start">

        {/* LEFT — NAME + PILLS */}
        <div>

          {/* NAME (LEFT ANCHORED, NOT CENTERED) */}
          <div className="font-league text-[#5862E9] select-none">

            <div className="flex text-[26vw] md:text-[14rem] leading-[0.68] font-bold scale-y-[1.1]">
              {["V","R","I","N","D","A"].map((l, i) => (
                <span key={i} className="-ml-[0.10em] first:ml-0">
                  {l}
                </span>
              ))}
            </div>

            <div className="flex text-[26vw] md:text-[14rem] leading-[0.68] font-bold scale-y-[1.1] mt-[2.4rem]">
              {["D","I","X","I","T"].map((l, i) => (
                <span key={i} className="-ml-[0.10em] first:ml-0">
                  {l}
                </span>
              ))}
            </div>

          </div>

          {/* PILLS — LEFT ALIGNED */}
          <div className="mt-10 space-y-3">
            <div className="inline-flex bg-pink-400 text-white px-4 py-2 rounded-full text-xs max-w-[240px] truncate">
              dixitvrinda1704@gmail.com
            </div>
            <div className="inline-flex bg-pink-400 text-black px-4 py-2 rounded-full text-xs max-w-[240px] truncate">
              linkedin.com/in/vrinda-dixit
            </div>
            <div className="inline-flex bg-pink-400 text-black px-4 py-2 rounded-full text-xs">
              Download Resume
            </div>
          </div>

        </div>

        {/* RIGHT — ABOUT + IMAGES */}
        <div>

          <h3 className="font-italianno text-4xl text-[#5862E9] mb-4">
            about me
          </h3>

          <p className="text-sm leading-relaxed max-w-sm mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* IMAGE STACK */}
          <div className="relative">
            <img
              src={mainImg}
              className="w-80 rotate-[3deg] shadow-xl"
              alt=""
            />
            <img
              src={smallImg}
              className="w-48 absolute -bottom-20 -left-20 rotate-[-4deg] shadow-xl"
              alt=""
            />
          </div>

          <p className="text-xs leading-relaxed max-w-sm mt-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

        </div>

      </div>

      {/* CARDS — PURPOSELY OFFSET, NOT CENTERED */}
      <div className="mt-40 flex flex-wrap gap-12 pl-16">

        <img src={education} className="w-[210px] rotate-[-6deg]" />
        <img src={experience} className="w-[210px] rotate-[4deg]" />
        <img src={software} className="w-[210px] rotate-[-3deg]" />
        <img src={misc} className="w-[210px] rotate-[6deg]" />

      </div>

      {/* SEE MORE */}
      <div className="mt-16 text-left pl-16">
        <button className="bg-black text-white text-xs px-6 py-2 rounded-full">
          see more →
        </button>
      </div>

    </section>
  );
}
