import React, { useEffect, useState } from "react";

const About = () => {
  const [spread, setSpread] = useState(false);

  // Trigger spread ONLY when WORKS enters view
  useEffect(() => {
    const works = document.getElementById("works");

    if (!works) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSpread(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(works);
  }, []);

  const colors = [
    "#1C1C1C",
    "#FF7EDF",
    "#8FA7FF",
    "#D6FF3E",
    "#B69CFF",
    "#FF755A",
    "#1C1C1C",
    "#FF70D4",
  ];

  return (
    <section id="about" className="min-h-screen bg-[#FDF9F5] pt-20 pb-28">

      {/* VRINDA DIXIT */}
      <div className="text-center mb-14">
        <h1 className="text-[170px] md:text-[200px] font-[Tahoma] font-extrabold text-[#5862E9] leading-none">
          VRINDA <br /> DIXIT
        </h1>
      </div>

      {/* Card Animation Container */}
      <div className="relative h-[250px] flex justify-center">

        {colors.map((c, i) => {
          const stackedX = (i - 3.5) * 12;  
          const stackedRot = (i - 3.5) * 12;

          const spreadX = (i - 3.5) * 170;

          return (
            <div
              key={i}
              className="absolute w-[140px] h-[180px] rounded-xl shadow-lg transition-all duration-[1200ms] ease-[cubic-bezier(.25,.8,.25,1)]"
              style={{
                backgroundColor: c,
                transform: spread
                  ? `translateX(${spreadX}px) rotate(0deg)`
                  : `translateX(${stackedX}px) rotate(${stackedRot}deg)`,
              }}
            ></div>
          );
        })}

      </div>

    </section>
  );
};

export default About;
