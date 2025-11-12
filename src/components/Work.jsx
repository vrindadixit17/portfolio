import React from "react";

const Works = () => {
  const projects = [
    {
      title: "Google Developers Group",
      color: "#FF7EDF", // pink
      rotate: "-6deg",
    },
    {
      title: "Google Developers Group",
      color: "#ED6951", // orange
      rotate: "-3deg",
    },
    {
      title: "Google Developers Group",
      color: "#B494F9", // lavender
      rotate: "0deg",
    },
    {
      title: "Google Developers Group",
      color: "#CDDF3D", // lime
      rotate: "3deg",
    },
    {
      title: "Google Developers Group",
      color: "#5862E9", // blue
      rotate: "6deg",
    },
  ];

  return (
    <section
      id="works"
      className="min-h-screen flex flex-col items-center justify-start bg-[#FDF9F5] pt-32 pb-20 overflow-hidden"
    >
      {/* ===== TITLE ===== */}
      <div className="relative text-center mb-4">
        {/* WORKS (main heading) */}
        <h1 className="inline-flex text-[#B494F9] font-[Tahoma] font-extrabold text-[90px] md:text-[110px] leading-none tracking-tight">
          W
          <span className="-ml-[10px]">O</span>
          <span className="-ml-[10px]">R</span>
          <span className="-ml-[10px]">K</span>
          <span className="-ml-[10px]">S</span>
        </h1>

        {/* overlay “works” italics */}
        <span className="absolute left-1/2 -translate-x-1/2 top-[65%] text-[40px] md:text-[55px] font-[Italianno] text-[#5862E9]">
          works
        </span>

        {/* tagline */}
        <p className="text-[#B494F9] font-[Italianno] text-[28px] mt-2">
          give your ideas a glow up, take a look at some of my projects
        </p>
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="w-[90%] border-t-2 border-[#222222] mt-4 mb-12"></div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="flex flex-wrap justify-center items-end gap-6 md:gap-8 mt-10">
        {projects.map((p, index) => (
          <div
            key={index}
            className="w-[180px] h-[240px] md:w-[220px] md:h-[280px] rounded-xl shadow-md border border-[#0A0F0D] flex flex-col justify-between px-4 py-6 transition-transform duration-500 hover:scale-105"
            style={{
              backgroundColor: p.color,
              transform: `rotate(${p.rotate})`,
            }}
          >
            <h2 className="text-[#0A0F0D] font-[Hanken_Grotesk] text-[16px] font-bold leading-snug">
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
