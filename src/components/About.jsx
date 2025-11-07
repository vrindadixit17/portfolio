import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full min-h-screen px-6 pt-20 pb-28 flex flex-col items-center
        bg-gradient-to-b
        from-[#FDF9F5] from-0%
        via-[#FF7EDF]  via-85%
        to-[#FDF9F5]   to-98%
      "
    >
      {/* ABOUT ME title (separate letters) */}
      <div className="relative text-center mb-4 -mb-20 z-20">
        <h1 className="inline-flex text-[#5862E9] font-[Hanken_Grotesk] font-extrabold leading-none text-[70px] md:text-[95px]">
          {/* ABOUT */}
          <span className="-mr-[14px]">A</span>
          <span className="-mr-[14px]">B</span>
          <span className="-mr-[14px]">O</span>
          <span className="-mr-[14px]">U</span>
          <span className="-mr-[14px]">T</span>

          {/* small spacer between words */}
          <span className="inline-block w-4 md:w-6" />

          {/* ME */}
          <span className="-mr-[14px]">M</span>
          <span>E</span>
        </h1>

        {/* Italianno overlays */}
        <span
          className="
            absolute left-[32%] top-[60%] -translate-y-1/2
            text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]
          "
        >
          about
        </span>
        <span
          className="
            absolute right-[28%] top-[60%] -translate-y-1/2
            text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]
          "
        >
          me
        </span>
      </div>

      {/* Main layout: Image + Text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full">
        {/* Browser-styled image (pulled up for overlap) */}
        <div className="rounded-xl overflow-hidden shadow-lg w-[260px] md:w-[340px] bg-white -mt-8 relative z-10">
          {/* Top bar with dots */}
          <div className="bg-[#CDDF3D] py-3 px-4 flex gap-2">
            <span className="w-3 h-3 bg-[#FF7EDF] rounded-full" />
            <span className="w-3 h-3 bg-[#5862E9] rounded-full" />
            <span className="w-3 h-3 bg-[#0A0F0D] rounded-full" />
          </div>

          <img src={aboutImg} alt="About" className="w-full h-auto object-cover" />

          {/* Lime footer strip */}
          <div className="bg-[#CDDF3D] h-[12px]" />
        </div>

        {/* Right paragraph */}
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
