import React from "react";

// images
import mainImg from "../assets/about.png";
import smallImg from "../assets/me.png";

import education from "../assets/education.png";
import experience from "../assets/experience.png";
import software from "../assets/software.png";
import misc from "../assets/misc.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FBF8F6] pt-28 pb-32 px-14"
    >
      {/* ===== LAYER 1: TOP CONTENT ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-24 items-start">

        {/* LEFT COLUMN */}
        <div>

          {/* NAME */}
          <div className="font-league text-[#5862E9] select-none">

            <div className="flex text-[24vw] md:text-[13rem] leading-[0.7] font-bold">
              {["V","R","I","N","D","A"].map((l, i) => (
                <span key={i} className="-ml-[0.08em] first:ml-0">
                  {l}
                </span>
              ))}
            </div>

            <div className="flex text-[24vw] md:text-[13rem] leading-[0.7] font-bold mt-[2.5rem]">
              {["D","I","X","I","T"].map((l, i) => (
                <span key={i} className="-ml-[0.08em] first:ml-0">
                  {l}
                </span>
              ))}
            </div>

          </div>

          {/* PILLS */}
          <div className="mt-10 space-y-3">
            <div className="inline-flex bg-pink-400 text-white px-4 py-2 rounded-full text-xs max-w-[260px] truncate">
              dixitvrinda1704@gmail.com
            </div>
            <div className="inline-flex bg-pink-400 text-black px-4 py-2 rounded-full text-xs max-w-[260px] truncate">
              https://www.linkedin.com/in/vrinda-dixit-30a591307/
            </div>
            <div className="inline-flex bg-pink-400 text-black px-4 py-2 rounded-full text-xs">
              Download Resume
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        {/* RIGHT SIDE WRAPPER */}
<div className="absolute top-32 left-[55%] w-[40%]">

  <h3 className="font-italianno text-4xl text-[#5862E9] mb-4">
    about me
  </h3>

  <p className="text-sm leading-relaxed mb-8">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  {/* IMAGE STACK */}
  <div className="relative mt-10">
    <img
      src={mainImg}
      className="w-[340px] rotate-[3deg]"
      alt=""
    />
    <img
      src={smallImg}
      className="w-[200px] absolute -bottom-20 -left-20 rotate-[-5deg]"
      alt=""
    />
  </div>

  <p className="text-xs leading-relaxed mt-28">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

</div>

      </div>

      {/* ===== LAYER 2: SKILL CARDS ===== */}
      <div className="mt-36 flex gap-12 pl-20">

        <img src={education} className="w-[210px] rotate-[-6deg]" />
        <img src={experience} className="w-[210px] rotate-[4deg]" />
        <img src={software} className="w-[210px] rotate-[-2deg]" />
        <img src={misc} className="w-[210px] rotate-[6deg]" />

      </div>

      {/* ===== LAYER 3: CTA ===== */}
      <div className="mt-20 flex justify-center">
        <button className="bg-black text-white text-xs px-6 py-2 rounded-full">
          see more →
        </button>
      </div>

    </section>
  );
}
