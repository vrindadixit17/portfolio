// src/components/About.jsx
import React from "react";

import imgBig from "../assets/about-main.png";     // big tilted image
import imgSmall from "../assets/about-small.png"; // small image

export default function About() {
  return (
    <section id="about" className="bg-[#FBF8F6] py-24 px-10">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* BIG NAME */}
          <h1 className="font-league text-[22vw] md:text-[11rem] leading-[0.75] text-[#5862E9]">
            VRINDA<br />DIXIT
          </h1>

          {/* CONTACT PILLS */}
          <div className="mt-8 space-y-3">
            <div className="bg-pink-400 text-white px-6 py-2 rounded-full w-fit text-sm">
              dixitvrinda1704@gmail.com
            </div>
            <div className="bg-pink-300 text-black px-6 py-2 rounded-full w-fit text-sm">
              https://www.linkedin.com/in/vrinda-dixit-30a591307/
            </div>
            <div className="bg-pink-200 px-6 py-2 rounded-full w-fit text-sm">
              Download Resume
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* ABOUT ME SCRIPT */}
          <h3 className="font-italianno text-4xl text-[#5862E9] mb-4">
            about me
          </h3>

          {/* TEXT */}
          <p className="text-sm leading-relaxed max-w-md mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* IMAGE STACK */}
          <div className="relative">

            {/* BIG IMAGE */}
            <img
              src={imgBig}
              className="w-80 rotate-[3deg] border-[6px] border-lime-300 rounded-xl shadow-xl"
              alt=""
            />

            {/* SMALL IMAGE */}
            <img
              src={imgSmall}
              className="w-48 absolute -bottom-16 -left-16 rotate-[-4deg] border-[6px] border-purple-300 rounded-xl shadow-xl"
              alt=""
            />

          </div>

          {/* IMAGE CAPTION */}
          <p className="text-xs leading-relaxed max-w-md mt-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        </div>
      </div>

      {/* SKILLS CARDS */}
      <div className="mt-32 flex flex-wrap justify-center gap-8">

        <SkillCard
          title="Education"
          color="bg-orange-400"
          items={[
            "St. Gregorios School – 94%",
            "Maharaja Surajmal Institute of Technology – 9.34",
          ]}
        />

        <SkillCard
          title="Experience"
          color="bg-purple-300"
          items={[
            "Student body head & Coordinator intern at AICTE",
            "IOT Trainee/Intern at NSIC",
            "UI/UX Intern at Effred Technologies",
          ]}
        />

        <SkillCard
          title="Software Skills"
          color="bg-lime-300"
          items={[
            "MERN Stack",
            "Figma, Adobe Illustrator, PowerBI, Excel, MySQL",
            "C, C++, Java, JavaScript, Python",
          ]}
        />

        <SkillCard
          title="Misc. activities"
          color="bg-blue-400"
          items={[
            "President of ASTITVA – Dance Society",
            "Graphic & UI/UX Designer",
            "Debater",
          ]}
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

/* CARD COMPONENT */
function SkillCard({ title, items, color }) {
  return (
    <div className={`${color} w-60 min-h-[260px] rounded-xl p-5 rotate-[-2deg]`}>
      <h4 className="font-semibold mb-3">{title}</h4>
      <ul className="text-sm space-y-2">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
