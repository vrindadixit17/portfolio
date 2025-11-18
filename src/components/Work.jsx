import React from "react";

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Web Design",
      subtitle: "Creative UI Design",
      details: "Portfolio, Landing Pages, Interactive Sites",
      color: "#B494F9",
    },
    {
      id: 2,
      title: "Development",
      subtitle: "MERN + Frontend",
      details: "React, Node, MongoDB, APIs",
      color: "#ED6951",
    },
    {
      id: 3,
      title: "Machine Learning",
      subtitle: "Data & AI Systems",
      details: "Python, TensorFlow, Data Analysis",
      color: "#CDDF3D",
    },
    {
      id: 4,
      title: "Research & Innovation",
      subtitle: "Electronics + Product Design",
      details: "ECE + Embedded Projects, UI Systems",
      color: "#5862E9",
    },
  ];

  return (
    <section
      id="works"
      className="min-h-screen bg-[#FDF9F5] flex flex-col items-center justify-center py-12 px-4"
    >
      {/* ===== TITLE ===== */}
      <div className="w-full text-center mb-8">
        <h1 className="text-[80px] md:text-[110px] font-[Tahoma] font-extrabold text-[#B494F9] leading-none">
          WORKS
        </h1>
        <p className="font-[Italianno] text-[#5862E9] text-[28px] md:text-[36px] -mt-3">
          give your ideas a glow up, take a look at some of my projects
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full max-w-6xl border-t border-[#0A0F0D] border-b">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between items-start h-[480px] border-r border-[#0A0F0D] overflow-hidden hover:scale-[1.02] transition-all duration-500 ease-in-out"
            style={{ backgroundColor: project.color }}
          >
            {/* LARGE NUMBER */}
            <h2 className="text-[140px] md:text-[180px] font-[Hanken_Grotesk] font-extrabold text-[#FDF9F5] opacity-90 ml-6 mt-10">
              {project.id}
            </h2>

            {/* PROJECT DETAILS */}
            <div className="p-6 text-[#0A0F0D] font-[Hanken_Grotesk]">
              <p className="text-[14px] uppercase tracking-widest border border-[#0A0F0D] rounded-full px-3 py-1 inline-block mb-2">
                {project.subtitle}
              </p>
              <h3 className="font-bold text-[18px] md:text-[20px] leading-tight">
                {project.title}
              </h3>
              <p className="text-[14px] mt-1">{project.details}</p>
            </div>

            {/* HOVER EFFECT (Glow line at bottom) */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#FDF9F5] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
