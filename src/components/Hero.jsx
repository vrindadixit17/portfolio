import React from "react";
import folder from "../assets/folder.png";  

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center min-h-screen bg-[#FDF9F5] px-6 pt-0 -mt-8 relative">

        {/* Portfolio Title Image */}
        <div className="text-center mt-20">
            <h1 className="inline-flex items-end justify-center">
            {/* P O R T */}
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">P</span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">O</span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">R</span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none">T</span>

            {/* folio */}
            <span className="font-[Italianno] text-[#FF7EDF] text-[100px] md:text-[150px] font-normal leading-none ml-2 relative top-[28px] left-[-30px] ">
            folio
            </span>
            </h1>
        </div>



        {/* Folder image + side text */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8 md:gap-16">
        {/* Left text */}
        <p className="max-w-xs text-[#B494F9] text-center md:text-right text-sm md:text-base font-[Hanken_Grotesk] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* Folder image */}
        <img
          src={folder}
          alt="Folder "
          className="w-[280px] md:w-[340px] h-auto object-contain"
        />

        {/* Right text */}
        <p className="max-w-xs text-[#B494F9] text-center md:text-left text-sm md:text-base font-[Hanken_Grotesk] leading-relaxed">
          Lorem ipsum dolor sit amnpet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
        <button className=" bg-[#B494F9] text-[#0A0F0D] px-6 py-1.5 rounded-full font-[Hanken Grotesk] text-sm md:text-base hover:bg-[#B494F9] transition-all duration-500 shadow-md">
          Available for new opportunities
        </button>
        <button className="border-2 border-[#B494F9] text-[#0A0F0D] px-6 py-1.5 rounded-full font-[Hanken Grotesk] text-sm md:text-base hover:bg-[#5862E9] hover:text-[#0A0F0D] transition-all duration-300 shadow-md">
          Contact
        </button>
      </div>
    </section>
  );
};

export default Hero;
