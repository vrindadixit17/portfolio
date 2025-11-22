import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#FDF9F5] min-h-screen flex flex-col items-center justify-start pt-20"
    >

      {/* WRAPPER */}
      <div className="relative w-full max-w-[1400px] flex justify-center items-center">

        {/* LEFT TEXT */}
        <div className="w-1/3 text-[13px] text-[#222] leading-relaxed text-right pr-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur .
        </div>

        {/* HUGE VRINDA DIXIT BACK TEXT */}
        <h1 className="absolute text-[250px] font-extrabold text-[#5862E9] opacity-80 leading-[0.8] text-center tracking-tight select-none">
          VRINDA<br/>DIXIT
        </h1>

        {/* CENTER STACK (PINK CARD) */}
        <div className="relative z-10 flex justify-center items-center -mt-10">
          {/* Multiple rotated layers */}
          <div className="absolute w-[220px] h-[300px] bg-[#FF7EDF] rotate-[8deg] rounded-xl"></div>
          <div className="absolute w-[220px] h-[300px] bg-[#CDDF3D] rotate-[2deg] rounded-xl"></div>
          <div className="absolute w-[220px] h-[300px] bg-[#8F85FF] -rotate-[5deg] rounded-xl"></div>

          {/* Main Pink Card */}
          <div className="w-[220px] h-[300px] bg-[#FF74D0] rounded-xl shadow-xl rotate-[6deg]"></div>
        </div>

        {/* RIGHT TEXT */}
        <div className="w-1/3 text-[13px] text-[#222] leading-relaxed text-left pl-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur .
        </div>

      </div>
    </section>
  );
};

export default About;
