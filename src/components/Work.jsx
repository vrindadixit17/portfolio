import React from "react";

const Works = () => {
  const projects = [
    { title: "Google Developers Group", color: "#FF7EDF", rotate: "-6deg" },
    { title: "Google Developers Group", color: "#ED6951", rotate: "-3deg" },
    { title: "Google Developers Group", color: "#B494F9", rotate: "0deg" },
    { title: "Google Developers Group", color: "#CDDF3D", rotate: "3deg" },
    { title: "Google Developers Group", color: "#5862E9", rotate: "6deg" },
  ];

  return (
    <section
      id="works"
      className="min-h-screen flex flex-col items-center justify-start bg-[#FDF9F5] pt-28 pb-20 overflow-hidden"
    >
      {/* ===== TITLE ===== */}
      <div className="relative text-left mb-4 w-[90%] md:w-[80%]">
        {/* WORKS (main heading) */}
        <h1 className="inline-flex text-[#B494F9] font-[Tahoma] font-extrabold text-[65px] md:text-[90px] leading-none tracking-tight">
          W
          <span className="-ml-[8px]">O</span>
          <span className="-ml-[8px]">R</span>
          <span className="-ml-[8px]">K</span>
          <span className="-ml-[8px]">S</span>
        </h1>

        {/* overlay “works” italics */}
        <span className="absolute left-[13%] top-[62%] -translate-y-1/2 text-[35px] md:text-[45px] font-[Italianno] text-[#5862E9]">
          works
        </span>

        {/* tagline */}
        <p className="text-[#B494F9] font-[Italianno] text-[22px] md:text-[26px] mt-2 ml-[10%]">
          give your ideas a glow up, take a look at some of my projects
        </p>
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="w-[90%] border-t-[1.5px] border-[#222222] mt-4 mb-12"></div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="flex flex-wrap justify-center items-end gap-6 md:gap-8 mt-10">
        {projects.map((p, index) => (
          <div
            key={index}
            className="w-[160px] h-[220px] md:w-[200px] md:h-[260px] rounded-xl shadow-md border border-[#0A0F0D] flex flex-col justify-between px-4 py-6 transition-transform duration-500 hover:scale-105"
            style={{
              backgroundColor: p.color,
              transform: `rotate(${p.rotate})`,
            }}
          >
            <h2 className="text-[#0A0F0D] font-[Hanken_Grotesk] text-[15px] font-bold leading-snug">
              {p.title}
            </h2>
            <div className="w-full h-[1.5px] bg-[#0A0F0D] mt-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
