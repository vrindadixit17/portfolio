import React from "react";
import card from "../assets/about.png"; // the centered pink card image

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#FDF9F5] flex flex-col items-center justify-start pt-20"
    >
      {/* -------- TOP TEXT + LOGO -------- */}
      <div className="flex justify-between w-full px-20 items-center mb-10">
        <h1 className="text-[48px] font-[Italianno] text-[#E47DED]">vrinda</h1>

        <div className="flex space-x-10 text-[#222] font-[Hanken_Grotesk] text-[20px]">
          <a href="#home">HOME</a>
          <a href="#about" className="bg-[#FF7EDF] px-4 py-1 rounded-md">ABOUT</a>
          <a href="#works">WORKS</a>
          <a href="#services">SERVICES</a>
          <a href="#works">WORKS</a>
          <span className="text-[42px] font-[Italianno] text-[#E47DED] -mt-2">
            portfolio
          </span>
        </div>
      </div>

      {/* -------- MAIN LAYOUT -------- */}
      <div className="w-full flex items-center justify-between px-20 mt-10">

        {/* LEFT TEXT */}
        <p className="w-[350px] text-[#222] text-[14px] leading-relaxed text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* CENTER BIG TEXT + CARD */}
        <div className="relative flex justify-center items-center">

          {/* VRINDA DIXIT BACKGROUND */}
          <h1 className="absolute text-[260px] font-[Hanken_Grotesk] font-extrabold text-[#5862E9] leading-none tracking-tight select-none">
            VRINDA <br /> DIXIT
          </h1>

          {/* STACKED CARDS */}
          <div className="relative w-[260px] h-[340px] mt-[60px]">
            {/* Multi-layered rotated cards */}
            {[...Array(7)].map((_, i) => (
              <img
                key={i}
                src={card}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl
                  transform rotate-[${-12 + i * 4}deg]`}
                alt="center-card"
              />
            ))}
          </div>
        </div>

        {/* RIGHT TEXT */}
        <p className="w-[350px] text-[#222] text-[14px] leading-relaxed text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default About;
