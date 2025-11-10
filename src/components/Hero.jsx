import React from "react";
import folder from "../assets/folder.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-stretch min-h-screen bg-[#FDF9F5]">
      {/* ===== LEFT SIDEBAR ===== */}
      <div className="bg-[#7A97FF] text-black w-full md:w-1/5 flex flex-col justify-between p-6 rounded-r-lg shadow-md">
        {/* Name */}
        <div>
          <h2 className="text-[#E6FF64] italic font-[Italianno] text-3xl mb-2">
            vrinda
          </h2>
          <p className="font-[Hanken_Grotesk] text-base border-b border-black pb-1">
            Portfolio
          </p>

          {/* Contents */}
          <div className="mt-6 border-t border-black pt-2">
            <h3 className="font-semibold mb-2">Contents</h3>
            <ul className="space-y-1 text-sm font-[Hanken_Grotesk]">
              <li>Home</li>
              <li>About Me</li>
              <li>My Works</li>
              <li>Experience</li>
            </ul>
          </div>
        </div>

        {/* Contact Button */}
        <button className="bg-white text-[#7A97FF] font-semibold rounded-full py-2 mt-6 shadow hover:scale-105 transition-all duration-300">
          Contact me
        </button>
      </div>

      {/* ===== CENTER HERO SECTION ===== */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10">
        {/* Title */}
        <div className="text-center mt-10">
          <h1 className="inline-flex items-end justify-center">
            {/* P O R T */}
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">
              P
            </span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">
              O
            </span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">
              R
            </span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none">
              T
            </span>

            {/* folio */}
            <span className="font-[Italianno] text-[#FF7EDF] text-[100px] md:text-[150px] font-normal leading-none ml-2 relative top-[28px] left-[-30px]">
              folio
            </span>
          </h1>
        </div>

        {/* Folder Image */}
        <div className="mt-10">
          <img
            src={folder}
            alt="Folder graphic"
            className="w-[280px] md:w-[340px] h-auto object-contain"
          />
        </div>
      </div>

      {/* ===== RIGHT SIDEBAR ===== */}
      <div className="bg-[#7A97FF] text-black w-full md:w-1/5 flex flex-col justify-between p-6 rounded-l-lg shadow-md">
        <div>
          {/* Project Stats */}
          <div>
            <h3 className="font-semibold border-b border-black pb-1 mb-2">
              Project Stats
            </h3>
            <ul className="text-sm font-[Hanken_Grotesk] space-y-1">
              <li className="flex justify-between">
                <span>Total projects</span>
                <span>19</span>
              </li>
              <li className="flex justify-between">
                <span>Public Repos</span>
                <span>15</span>
              </li>
              <li className="flex justify-between">
                <span>Languages</span>
                <span>7</span>
              </li>
              <li className="flex justify-between">
                <span>Experience</span>
                <span>2</span>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-6 border-t border-black pt-2">
            <h3 className="font-semibold mb-2">Education</h3>
            <ul className="text-sm font-[Hanken_Grotesk] space-y-1">
              <li>Higher Secondary</li>
              <li>Public Repos</li>
            </ul>
          </div>
        </div>

        {/* Resume Button */}
        <button className="bg-white text-[#7A97FF] font-semibold rounded-full py-2 mt-6 shadow hover:scale-105 transition-all duration-300">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
