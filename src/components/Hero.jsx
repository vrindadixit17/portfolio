import React from "react";
import folder from "../assets/folder.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center text-center min-h-screen bg-[#FDF9F5] px-6 pt-1 overflow-hidden">
      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <aside className="hidden md:flex flex-col justify-between absolute top-4 left-4 w-[260px] h-[85%] bg-[#94A7FF] text-[#0A0F0D] rounded-xl shadow-md p-5">

        <div>
          <p className="text-lg font-[Hanken_Grotesk] mt-2">Portfolio</p>
          <hr className="border-t border-[#0A0F0D] my-4" />
          <h3 className="font-[Hanken_Grotesk] text-base">Contents</h3>
          <hr className="border-t border-[#0A0F0D] my-2" />

          <ul className="text-sm space-y-2 mt-3 font-[Hanken_Grotesk]">
            <li className="hover:text-[#FDF9F5] transition-all cursor-pointer">Home</li>
            <li className="hover:text-[#FDF9F5] transition-all cursor-pointer">About Me</li>
            <li className="hover:text-[#FDF9F5] transition-all cursor-pointer">My Works</li>
            <li className="hover:text-[#FDF9F5] transition-all cursor-pointer">Experience</li>
          </ul>
        </div>

        <button className="bg-[#FDF9F5] text-[#5862E9] font-[Hanken_Grotesk] text-sm font-semibold py-2 px-5 rounded-full shadow-md hover:bg-[#CDDF3D] hover:text-[#0A0F0D] transition-all">
          Contact me
        </button>
      </aside>

      {/* ---------------- RIGHT SIDEBAR ---------------- */}
      <aside className="hidden md:flex flex-col justify-between absolute top-4 right-4 w-[260px] h-[85%] bg-[#94A7FF] text-[#0A0F0D] rounded-xl shadow-md p-5">

        <div>
          <h3 className="font-[Hanken_Grotesk] text-base">Project Stats</h3>
          <hr className="border-t border-[#0A0F0D] my-2" />
          <ul className="text-sm font-[Hanken_Grotesk] space-y-2">
            <li className="flex justify-between">
              <span>Total projects</span> <span>19</span>
            </li>
            <li className="flex justify-between">
              <span>Public Repos</span> <span>15</span>
            </li>
            <li className="flex justify-between">
              <span>Languages</span> <span>7</span>
            </li>
            <li className="flex justify-between">
              <span>Experience</span> <span>2</span>
            </li>
          </ul>

          <hr className="border-t border-[#0A0F0D] my-4" />
          <h3 className="font-[Hanken_Grotesk] text-base">Education</h3>
          <hr className="border-t border-[#0A0F0D] my-2" />
          <ul className="text-sm font-[Hanken_Grotesk] space-y-2">
            <li>Higher Secondary</li>
            <li>Public Repos</li>
          </ul>
        </div>

        <button className="bg-[#FDF9F5] text-[#5862E9] font-[Hanken_Grotesk] text-sm font-semibold py-2 px-5 rounded-full shadow-md hover:bg-[#CDDF3D] hover:text-[#0A0F0D] transition-all">
          Download Resume
        </button>
      </aside>

      

      {/* ---------------- PORTfolio TITLE ---------------- */}
      <div className="text-center mt-24 z-10">
        <h1 className="inline-flex items-end justify-center">
          {/* PORT */}
          <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[80px] md:text-[130px] leading-none -mr-[10px] tracking-tight">
            P
          </span>
          <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[80px] md:text-[130px] leading-none -mr-[10px] tracking-tight">
            O
          </span>
          <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[80px] md:text-[130px] leading-none -mr-[10px] tracking-tight">
            R
          </span>
          <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[80px] md:text-[130px] leading-none tracking-tight">
            T
          </span>

          {/* folio */}
          <span className="font-[Italianno] text-[#FF7EDF] text-[100px] md:text-[150px] font-normal leading-none ml-2 relative top-[24px] left-[-25px]">
            folio
          </span>
        </h1>
      </div>

      {/* ---------------- FOLDER + SIDE TEXT ---------------- */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-10 gap-8 md:gap-20 px-4 md:px-10 z-10">
       
        {/* Folder Image */}
        <img
          src={folder}
          alt="Folder"
          className="w-[250px] md:w-[350px] h-auto object-contain drop-shadow-md"
        />
 
      </div>

    </section>
  );
};

export default Hero;
