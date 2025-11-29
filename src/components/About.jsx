{/* CENTER BIG TEXT + CENTER IMAGE */}
<div className="relative flex flex-col items-center justify-center">

  {/* LINE 1: V R I N D A */}
  <div className="flex gap-[1.2vw] md:gap-6 font-bebas text-[12vw] md:text-[8rem] text-[var(--blue)] leading-none select-none">
    {"VRINDA".split("").map((letter, i) => (
      <span key={i} className="uppercase">
        {letter}
      </span>
    ))}
  </div>

  {/* LINE 2: D I X I T */}
  <div className="flex gap-[1.2vw] md:gap-6 font-bebas text-[12vw] md:text-[8rem] text-[var(--blue)] leading-none select-none -mt-[1vw]">
    {"DIXIT".split("").map((letter, i) => (
      <span key={i} className="uppercase">
        {letter}
      </span>
    ))}
  </div>

  {/* CENTER IMAGE (scaled + positioned) */}
  <img
    src={centerImg}
    className="absolute top-1/2 -translate-y-[55%] w-32 md:w-48 rotate-[3deg] drop-shadow-xl select-none"
    alt="about-center"
  />
</div>
