import React from "react";
import aboutImg from "../assets/about.png"; // main large image
import me from "../assets/me.png"; // smaller overlay image

const About = () => {
  const skills = [
    "UI/UX Design",
    "React",
    "JavaScript",
    "Python",
    "Tailwind CSS",
    "Figma",
    "Data Structures",
    "Node.js",
    "SQL",
    "Leadership",
    "Communication",
    "Public Speaking",
  ];

  return (
    <section id="about" className="w-full flex flex-col relative overflow-hidden">
      {/* ✅ TOP OMBRE (White → Pink) */}
      <div className="w-full h-[120px] bg-gradient-to-b from-[#FDF9F5] to-[#FF7EDF]" />

      {/* ✅ MIDDLE PINK SECTION */}
      <div className="relative w-full bg-[#FF7EDF] px-1 pt-2 pb-2 flex flex-col items-center">

        {/* ✅ ABOUT ME Title */}
        <div className="relative text-center z-30 translate-x-16 md:translate-x-20 -translate-y-6 md:-translate-y-8">
          <h1 className="inline-flex text-[#5862E9] font-[Hanken_Grotesk] font-extrabold leading-none text-[70px] md:text-[95px]">
            <span className="font-[Tahoma] text-[90px] md:text-[100px] -mr-[16px]">A</span>
            <span className="font-[Tahoma] text-[90px] md:text-[100px] -mr-[16px]">B</span>
            <span className="font-[Tahoma] text-[90px] md:text-[100px] -mr-[16px]">O</span>
            <span className="font-[Tahoma] text-[90px] md:text-[100px] -mr-[16px]">U</span>
            <span className="font-[Tahoma] text-[90px] md:text-[100px] -mr-[16px]">T</span>
            <span className="inline-block w-4 md:w-6"></span>
            <span className="font-[Tahoma] text-[90px] md:text-[100px] -mr-[16px]">M</span>
            <span className="font-[Tahoma] text-[90px] md:text-[100px]">E</span>
          </h1>

          {/* Italianno overlay */}
          <span className="absolute left-[32%] top-[60%] -translate-y-1/2 text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
            about
          </span>
          <span className="absolute right-[28%] top-[60%] -translate-y-1/2 text-[40px] md:text-[55px] font-[Italianno] text-[#CDDF3D]">
            me
          </span>
        </div>

        {/* ✅ SKILLS SLIDER - Positioned just below title & behind images */}
        <div className="absolute top-[35%] left-0 w-full overflow-hidden z-10 opacity-70">
          <div className="flex whitespace-nowrap animate-marquee">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="mx-1 bg-[#FDF9F5] text-[#5862E9] font-[Hanken_Grotesk] text-xs md:text-sm font-semibold px-6 py-1.5 rounded-full shadow-sm border border-[#5862E9]/60 min-w-fit tracking-wide"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ MAIN LAYOUT (Image + Text) */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 max-w-6xl w-full z-20 mt-15">
          {/* ✅ IMAGE CONTAINER — with overlay */}
          <div className="relative w-[280px] md:w-[380px] rotate-[4deg] -mt-20 z-30">
            {/* Main Image */}
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-auto object-cover rounded-b-xl shadow-xl"
            />

            {/* Smaller overlay image */}
            <div className="absolute -bottom-10 -left-24 w-[160px] md:w-[200px] rotate-[-10deg] z-20">
              <img
                src={me}
                alt="Me"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right text */}
          <p className="max-w-md text-[#222222] text-center md:text-left font-[Hanken_Grotesk] leading-relaxed text-[15px] z-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* ✅ BOTTOM OMBRE (Pink → White) */}
      <div className="w-full h-[200px] bg-gradient-to-b from-[#FF7EDF] to-[#FDF9F5]" />
    </section>
  );
};

export default About;
