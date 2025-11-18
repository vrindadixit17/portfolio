import React from "react";
import img1 from "../assets/work1.png";
import img2 from "../assets/work2.png";
import img3 from "../assets/work3.png";
import img4 from "../assets/work4.png";

const Works = () => {
  const projects = [
    {
      id: 1,
      subtitle: "LABORATORY",
      details: "Discovery Industry Solutions",
      image: img1,
    },
    {
      id: 2,
      subtitle: "ENGINEERING",
      details: "Chemical • Synthetic Fibers • Metal",
      image: img2,
    },
    {
      id: 3,
      subtitle: "LAB PRODUCTION",
      details: "Racks • Exhibition Systems",
      image: img3,
    },
    {
      id: 4,
      subtitle: "PROJECTS 3D",
      details: "Analysis • Product Sketch",
      image: img4,
    },
  ];

  return (
    <section
      id="works"
      className="min-h-screen bg-[#FDF9F5] flex flex-col items-center justify-center py-12 px-4 overflow-hidden"
    >
      {/* TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-[80px] md:text-[110px] font-[Tahoma] font-extrabold text-[#B494F9] leading-none">
          WORKS
        </h1>
        <p className="font-[Italianno] text-[#5862E9] text-[28px] md:text-[36px] -mt-3">
          give your ideas a glow up, take a look at some of my projects
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full max-w-7xl border-t border-[#0A0F0D] border-b">

        {projects.map((p) => (
          <div
            key={p.id}
            className="
              relative h-[520px] 
              border-r border-[#0A0F0D] 
              group overflow-hidden cursor-pointer
            "
          >
            {/* DEFAULT WHITE PANEL */}
            <div className="absolute inset-0 bg-white z-10 group-hover:opacity-0 transition-opacity duration-500 flex flex-col justify-between p-8">

              {/* LARGE NUMBER */}
              <h2 className="text-[150px] md:text-[190px] font-[Hanken_Grotesk] font-extrabold text-[#5862E9]">
                {p.id}
              </h2>

              {/* TEXT SECTION */}
              <div>
                <p className="text-[13px] tracking-widest border border-[#0A0F0D] rounded-full px-3 py-1 inline-block mb-3">
                  {p.subtitle}
                </p>
                <p className="font-[Hanken_Grotesk] text-[16px] leading-snug text-[#0A0F0D]">
                  {p.details}
                </p>
              </div>
            </div>

            {/* PROJECT IMAGE (HIDDEN UNTIL HOVER) */}
            <img
              src={p.image}
              alt="work"
              className="absolute inset-0 w-full h-full object-cover scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default Works;
