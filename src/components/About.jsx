// src/components/About.jsx
import React from "react";

// About images
import mainImg from "../assets/about.png";
import smallImg from "../assets/me.png";

// Skill cards (PNGs)
import education from "../assets/education.png";
import experience from "../assets/experience.png";
import software from "../assets/software.png";
import misc from "../assets/misc.png";

export default function About() {
  return (
    <section id="about" className="bg-[#FBF8F6] pt-24 pb-32 px-10">

      {/* TOP ABOUT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* VRINDA DIXIT */}
          <div className="font-league text-[#5862E9] select-none">

            {/* VRINDA */}
            <div className="flex justify-center text-[26vw] md:text-[14rem] leading-[0.68] font-bold scale-y-[1.1]">
              {["V","R","I","N","D","A"].map((l, i) => (
                <span key={i} className="-ml-[0.10em] first:ml-0">
                  {l}
                </span>
              ))}
            </div>

            {/* DIXIT */}
            <div className="flex justify-center text-[26vw] md:text-[14rem] leading-[0.68] font-bold scale-y-[1.1] mt-[2rem]">
              {["D","I","X","I","T"].map((l, i) => (
                <span key={i} className="-ml-[0.10em] first:ml-0">
                  {l}
                </span>
              ))}
            </div>

          </div>

          {/* CONTACT PILLS */}
          <div className="mt-8 space-y-3">

            <div className="inline-flex bg-pink-400 text-white px-4 py-2 rounded-full text-xs max-w-[260px] truncate">
              dixitvrinda1704@gmail.com
            </div>

            <div className="inline-flex bg-pink-400 text-black px-4 py-2 rounded-full text-xs max-w-[260px] truncate">
              linkedin.com/in/vrinda-dixit
            </div>

            <div className="inline-flex bg-pink-400 text-black px-4 py-2 rounded-full text-xs">
              Download Resume
            </div>

          </div>

        </div> {/* END LEFT SIDE */}


        {/* RIGHT SIDE */}
        <div className="relative">

          {/* ABOUT ME */}
          <h3 className="font-italianno text-4xl text-[#5862E9] mb-4">
            about me
          </h3>

          <p className="text-sm leading-relaxed max-w-md mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* IMAGE STACK */}
          <div className="relative">
            <img
              src={mainImg}
              alt="about main"
              className="w-80 rotate-[3deg] shadow-xl"
            />

            <img
              src={smallImg}
              alt="about small"
              className="w-48 absolute -bottom-16 -left-16 rotate-[-4deg] shadow-xl"
            />
          </div>

          <p className="text-xs leading-relaxed max-w-md mt-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div> {/* END RIGHT SIDE */}

      </div> {/* END GRID */}


      {/* SKILL CARDS — INSIDE ABOUT */}
      <div className="mt-36 flex flex-wrap justify-center gap-12">

        <img
          src={education}
          alt="education"
          className="w-[200px] md:w-[220px] object-contain rotate-[-6deg]"
        />

        <img
          src={experience}
          alt="experience"
          className="w-[200px] md:w-[220px] object-contain rotate-[4deg]"
        />

        <img
          src={software}
          alt="software"
          className="w-[200px] md:w-[220px] object-contain rotate-[-3deg]"
        />

        <img
          src={misc}
          alt="misc"
          className="w-[200px] md:w-[220px] object-contain rotate-[6deg]"
        />

      </div>

      {/* SEE MORE */}
      <div className="mt-16 text-center">
        <button className="bg-black text-white text-xs px-6 py-2 rounded-full">
          see more →
        </button>
      </div>

    </section>
  );
}
