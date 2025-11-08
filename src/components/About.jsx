import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col">

      {/* ✅ TOP OMBRE (White → Pink) — REDUCED HEIGHT */}
      <div className="w-full h-[120px] bg-gradient-to-b from-[#FDF9F5] to-[#FF7EDF]"></div>

      {/* ✅ MIDDLE SOLID PINK BLOCK */}
      <div className="w-full bg-[#FF7EDF] px-1 pt-2 pb-2 flex flex-col items-center">

        {/* ✅ ABOUT ME title — MOVED UP */}
        <div className="relative text-center z-20 translate-x-16 md:translate-x-20 -translate-y-6 md:-translate-y-5">


          <h1 className="inline-flex text-[#5862E9] font-[Hanken_Grotesk] font-extrabold leading-none text-[70px] md:text-[95px]">

            {/* Letters: ABOUT */}
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none -mr-[16px]">A</span>
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none -mr-[16px]">B</span>
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none -mr-[16px]">O</span>
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none -mr-[16px]">U</span>
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none -mr-[16px]">T</span>

            {/* Space */}
            <span className="inline-block w-4 md:w-6"></span>

            {/* Letters: ME */}
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none -mr-[16px]">M</span>
            <span className="text-[#5862E9] font-[Tahoma] font-extrabold text-[90px] md:text-[100px] leading-none">E</span>
          </h1>

          {/* Italianno overlay */}
          <span className="absolute left-[32%] top-[60%] -translate-y-1/2 text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
            about
          </span>
<span className="inline-block w-6 md:w-12"></span>
          <span className="absolute right-[28%] top-[60%] -translate-y-1/2 text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
            me
          </span>
        </div>

        {/* ✅ MAIN LAYOUT (Image + Text) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full">

          {/* ✅ IMAGE — MOVED UP */}
          <img
            src={aboutImg}
            alt="About"
            className="w-[280px] md:w-[380px] rounded-xl -mt-10 shadow-lg"
          />

          {/* Right text */}
          <p className="max-w-md text-[#222222] text-center md:text-left font-[Hanken_Grotesk] leading-relaxed text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>

        </div>
      </div>

      {/* ✅ BOTTOM OMBRE (Pink → White) */}
      <div className="w-full h-[200px] bg-gradient-to-b from-[#FF7EDF] to-[#FDF9F5]"></div>

    </section>
  );
};

export default About;
