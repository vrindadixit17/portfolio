import React from "react";
import aboutImg from "../assets/about.jpg"; // your picture here

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-[#FF7EDF] to-[#FDF9F5] pt-20 pb-28 flex flex-col items-center px-6"
    >
      {/* Title */}
      <div className="relative text-center mb-16">
        <h1 className="text-[70px] md:text-[100px] font-[Hanken_Grotesk] font-extrabold text-[#5862E9] tracking-tight">
          ABOUT <span className="text-[#5862E9]">ME</span>
        </h1>

        {/* Overlapping Italianno text */}
        <span className="absolute left-[30%] top-[50%] -translate-y-1/2 text-[45px] md:text-[60px] font-[Italianno] text-[#CDDF3D]">
          about
        </span>
        <span className="absolute right-[22%] top-[50%] -translate-y-1/2 text-[45px] md:text-[60px] font-[Italianno] text-[#CDDF3D]">
          me
        </span>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full max-w-6xl">
        
        {/* Image Browser Window */}
        <div className="rounded-xl overflow-hidden shadow-xl w-[280px] md:w-[350px]">
          {/* Fake browser top bar */}
          <div className="bg-[#CDDF3D] py-3 px-4 flex gap-2">
            <span className="w-3 h-3 bg-[#FF7EDF] rounded-full"></span>
            <span className="w-3 h-3 bg-[#5862E9] rounded-full"></span>
            <span className="w-3 h-3 bg-[#0A0F0D] rounded-full"></span>
          </div>

          {/* Image */}
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Block */}
        <p className="max-w-md text-[#0A0F0D] text-center md:text-left text-sm md:text-base font-[Hanken_Grotesk] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
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
