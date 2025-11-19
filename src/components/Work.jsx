import React from "react";
import proj3 from "../assets/proj3.jpg"; // image for panel 3 (replace with yours!)

const Works = () => {
  return (
    <section
      id="works"
      className="w-full min-h-screen bg-[#FDF9F5] pt-10 pb-20"
    >
      {/* WORKS TITLE */}
      <div className="text-left pl-10 mb-10">
        <h1 className="inline-flex items-end space-x-2">
          <span className="text-[#B494F9] font-[Tahoma] text-[80px] md:text-[110px] font-extrabold">
            W
          </span>
          <span className="text-[#B494F9] font-[Tahoma] text-[80px] md:text-[110px] font-extrabold">
            O
          </span>
          <span className="text-[#B494F9] font-[Tahoma] text-[80px] md:text-[110px] font-extrabold">
            R
          </span>
          <span className="text-[#B494F9] font-[Tahoma] text-[80px] md:text-[110px] font-extrabold">
            K
          </span>
          <span className="text-[#B494F9] font-[Tahoma] text-[80px] md:text-[110px] font-extrabold">
            S
          </span>

          <span className="font-[Italianno] text-[45px] md:text-[60px] text-[#B494F9] ml-4">
            works
          </span>
          <span className="font-[Italianno] text-[35px] md:text-[50px] text-[#B494F9] ml-4">
            give your ideas a glow up, take a look at some of my projects
          </span>
        </h1>
      </div>

      {/* LINE UNDER TITLE */}
      <div className="w-full border-t border-[#222222] opacity-40"></div>

      {/* PANELS */}
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10 h-[70vh]">
        {/* PANEL 1 */}
        <div className="relative bg-[#1A1A1A] flex items-center justify-center overflow-hidden group">
          <span className="text-[#CDDF3D] font-[Tahoma] text-[180px] md:text-[250px] font-extrabold group-hover:opacity-0 transition-all duration-300">
            1
          </span>

          {/* Hover content */}
          <div className="absolute inset-0 bg-[#1A1A1A] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <p className="text-xl font-semibold">Project Coming Soon</p>
          </div>
        </div>

        {/* PANEL 2 */}
        <div className="relative bg-[#1A1A1A] flex items-center justify-center overflow-hidden group">
          <span className="text-[#CDDF3D] font-[Tahoma] text-[180px] md:text-[250px] font-extrabold group-hover:opacity-0 transition-all duration-300">
            2
          </span>
          <div className="absolute inset-0 bg-[#1A1A1A] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <p className="text-xl font-semibold">Project Coming Soon</p>
          </div>
        </div>

        {/* PANEL 3 — IMAGE SHOWS ON HOVER */}
        <div className="relative bg-[#1A1A1A] flex items-center justify-center overflow-hidden group">
          <span className="text-[#CDDF3D] font-[Tahoma] text-[180px] md:text-[250px] font-extrabold group-hover:opacity-0 transition-all duration-300">
            3
          </span>

          <img
            src={proj3}
            alt="Project 3"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>

        {/* PANEL 4 */}
        <div className="relative bg-[#1A1A1A] flex items-center justify-center overflow-hidden group">
          <span className="text-[#CDDF3D] font-[Tahoma] text-[180px] md:text-[250px] font-extrabold group-hover:opacity-0 transition-all duration-300">
            4
          </span>

          <div className="absolute inset-0 bg-[#1A1A1A] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            <p className="text-xl font-semibold">Project Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
