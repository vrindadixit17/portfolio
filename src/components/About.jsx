import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 pt-20 pb-28 flex flex-col items-center 
      bg-gradient-to-b from-[#FDF9F5] from-2% via-[#FF7EDF] via-92% to-[#FDF9F5] to-98%"
    >
      {/* ABOUT ME Title */}
      <div className="relative mb-12 -mt-50 z-20">

        <h1 className="inline-flex text-[#5862E9] font-[Hanken_Grotesk] font-extrabold text-[70px] md:text-[95px] leading-none">
          
          {/* ABOUT */}
          <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none -mr-[18px]">A</span>
            <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none -mr-[18px]">B</span>
            <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none -mr-[18px]">O</span>
            <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none -mr-[18px]">U</span>
            <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none">T</span>

          {/* space between ABOUT & ME */}
          <span className="w-5 md:w-8 inline-block"></span>

          {/* ME */}
          <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none -mr-[18px]">M</span>
            <span className="text-[#FDF9F5] font-[Tahoma] font-extrabold text-[90px] md:text-[90px] leading-none">E</span>
        </h1>

        {/* Italianno overlay words */}
        <span className="absolute left-[32%] top-[62%] -translate-y-1/2 
          text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
          about
        </span>

        <span className="absolute right-[28%] top-[62%] -translate-y-1/2 
          text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
          me
        </span>
      </div>

      {/* MAIN LAYOUT: Image + Text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full">

        {/* Image container with browser style */}
        <div className="rounded-xl overflow-hidden shadow-lg w-[260px] md:w-[340px] bg-white -mt-100 relative z-10">

          {/* Fake browser top bar */}
          <div className="bg-[#CDDF3D] py-3 px-4 flex gap-2">
            <span className="w-3 h-3 bg-[#FF7EDF] rounded-full"></span>
            <span className="w-3 h-3 bg-[#5862E9] rounded-full"></span>
            <span className="w-3 h-3 bg-[#0A0F0D] rounded-full"></span>
          </div>

          {/* Real image */}
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-auto object-cover"
          />

          {/* Lime bottom bar */}
          <div className="bg-[#CDDF3D] h-[12px]"></div>
        </div>

        {/* Right text */}
        <p className="max-w-md text-[#5862E9] text-center md:text-left font-[Hanken_Grotesk] leading-relaxed text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
        </p>

      </div>
    </section>
  );
};

export default About;
