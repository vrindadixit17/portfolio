import React from "react";
import aboutImg from "../assets/about.png"; // main (green header) image
import me from "../assets/me.png"; // tilted purple header image

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col bg-gradient-to-b from-[#FDF9F5] via-[#FF7EDF] to-[#FDF9F5] pb-16 overflow-hidden"
    >
      {/* ==== ABOUT ME TITLE ==== */}
      <div className="relative text-center z-20 translate-x-16 md:translate-x-24 -translate-y-10 md:-translate-y-12">
        <h1 className="inline-flex text-[#5862E9] font-[Hanken_Grotesk] font-extrabold leading-none text-[70px] md:text-[95px]">
          <span className="font-[Tahoma] -mr-[14px]">A</span>
          <span className="font-[Tahoma] -mr-[14px]">B</span>
          <span className="font-[Tahoma] -mr-[14px]">O</span>
          <span className="font-[Tahoma] -mr-[14px]">U</span>
          <span className="font-[Tahoma] -mr-[14px]">T</span>
          <span className="inline-block w-4 md:w-6"></span>
          <span className="font-[Tahoma] -mr-[14px]">M</span>
          <span className="font-[Tahoma]">E</span>
        </h1>

        {/* Overlay cursive text */}
        <span className="absolute left-[32%] top-[60%] -translate-y-1/2 text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
          about
        </span>
        <span className="absolute right-[28%] top-[60%] -translate-y-1/2 text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
          me
        </span>

        {/* Subheading line */}
        <p className="text-[#5862E9] text-lg md:text-xl italic font-[Italianno] mt-2">
          give your ideas a glow up, take a look at some of my projects
        </p>
      </div>

      {/* ==== MAIN CONTENT ==== */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full mt-6 relative px-6">
        {/* Left Section - Overlapping Images */}
        <div className="relative">
          {/* Top Image (green header) */}
          <div className="relative w-[280px] md:w-[360px] rotate-[-3deg] z-10">
            <div className="bg-[#CDDF3D] py-3 px-4 flex gap-2 rounded-t-xl">
              <span className="w-3 h-3 bg-[#FF7EDF] rounded-full"></span>
              <span className="w-3 h-3 bg-[#5862E9] rounded-full"></span>
              <span className="w-3 h-3 bg-[#0A0F0D] rounded-full"></span>
            </div>
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-auto object-cover rounded-b-xl shadow-lg"
            />
          </div>

          {/* Bottom Tilted Image (purple header) */}
          <div className="absolute -bottom-10 -left-10 w-[220px] md:w-[280px] rotate-[5deg] z-0">
            <div className="bg-[#5862E9] py-3 px-4 flex gap-2 rounded-t-xl">
              <span className="w-3 h-3 bg-[#FF7EDF] rounded-full"></span>
              <span className="w-3 h-3 bg-[#CDDF3D] rounded-full"></span>
              <span className="w-3 h-3 bg-[#0A0F0D] rounded-full"></span>
            </div>
            <img
              src={me}
              alt="Me"
              className="w-full h-auto object-cover rounded-b-xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <p className="max-w-md text-[#0A0F0D] text-center md:text-left font-[Hanken_Grotesk] leading-relaxed text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* ==== BOTTOM OMBRE ==== */}
      <div className="w-full h-[160px] bg-gradient-to-b from-[#FF7EDF] to-[#FDF9F5]"></div>
    </section>
  );
};

export default About;
