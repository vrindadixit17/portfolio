// src/components/Hero.jsx
import React from "react";

/* uses image at /mnt/data/landing.jpg */
export default function Hero() {
  return (
    <section id="home" className="py-8">
      {/* device mockups row */}
      <div className="flex justify-center gap-6 overflow-x-auto pb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-[160px] md:w-[200px] device-frame">
            <div className="h-[320px] md:h-[360px] bg-white rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/mnt/data/landing.jpg" alt={`device-${i}`} className="object-cover h-full w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* big name + central stacked tile */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-6">
        <div className="md:w-1/3 text-left">
          <p className="text-sm font-semibold uppercase tracking-widest">vrinda</p>
          <h1 className="font-bebas text-[6rem] md:text-[8rem] leading-none text-[var(--blue)]">VRINDA<br/>DIXIT</h1>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            {/* stacked colorful card */}
            <div className="absolute -left-6 -top-6 w-36 h-44 rounded-xl" style={{background: 'var(--lav)'}} />
            <div className="absolute -right-6 top-6 w-36 h-44 rounded-xl" style={{background: 'var(--sky)'}} />
            <div className="w-44 h-56 rounded-xl bg-[var(--pink)] flex items-center justify-center tile-stack">
              <div className="w-36 h-44 rounded-md bg-white/10" />
            </div>
          </div>
        </div>

        <div className="md:w-1/3 text-sm">
          <p className="text-[14px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Short intro about you goes here — what you design, build and love.
          </p>
        </div>
      </div>
    </section>
  );
}
