import React, { useEffect, useState } from "react";

const About = () => {
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    const about = document.getElementById("about");

    if (!about) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const e = entries[0];

        // When ABOUT section is at least 40% visible → expand
        if (e.intersectionRatio > 0.4) {
          setSpread(true);
        } else {
          setSpread(false);
        }
      },
      { threshold: [0, 0.2, 0.4, 0.6, 1] }
    );

    observer.observe(about);
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
    <section
      id="about"
      className="min-h-screen bg-[#FDF9F5] flex flex-col items-center justify-start pt-32"
    >
      {/* HUGE VRINDA DIXIT */}
      <h1 className="text-[170px] md:text-[200px] font-[Bebas Nue] text-[#5862E9] font-extrabold leading-none text-center mb-8">
        VRINDA <br /> DIXIT
      </h1>

      {/* Card stack animation */}
      <div className="relative h-[260px] w-full flex justify-center">
        {colors.map((c, i) => {
          const stackedX = (i - 3.5) * 12; // tight stack
          const stackedRot = (i - 3.5) * 10;

          const spreadX = (i - 3.5) * 170; // final horizontal position

          return (
            <div
              key={i}
              className="absolute w-[150px] h-[200px] rounded-xl shadow-lg transition-all duration-[1400ms] ease-[cubic-bezier(.25,.8,.25,1)]"
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
