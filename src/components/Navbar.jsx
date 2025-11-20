// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

const links = ["Home", "About", "Works", "Services", "Contact"];

const Navbar = () => {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // when you scroll past most of the hero, make nav compact
      const triggerY = window.innerHeight * 0.6;
      setCompact(window.scrollY > triggerY);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop;
    window.scrollTo({ top: top, behavior: "smooth" });
  };

  // 🔹 BIG NAV (bottom, like your hero pic)
  if (!compact) {
    return (
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <div className="flex items-center gap-10 md:gap-16 pointer-events-auto">
          {/* left logo */}
          <span className="font-[Italianno] text-[36px] md:text-[42px] text-[#FF7EDF]">
            vrinda
          </span>

          {/* center links */}
          <ul className="flex gap-6 md:gap-10 text-[14px] md:text-[16px] font-[Hanken_Grotesk] text-[#0A0F0D]">
            {links.map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={handleClick(id)}
                    className="uppercase tracking-[0.15em] hover:text-[#5862E9] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* right "portfolio" */}
          <span className="font-[Italianno] text-[36px] md:text-[42px] text-[#FF7EDF]">
            portfolio
          </span>
        </div>
      </nav>
    );
  }

  // 🔹 COMPACT NAV (right side when scrolled)
  return (
    <nav className="fixed top-1/2 right-4 -translate-y-1/2 z-40">
      <div className="flex flex-col items-end gap-3 bg-white/40 backdrop-blur-md rounded-3xl px-3 py-4 shadow-md">
        <span className="font-[Italianno] text-[24px] text-[#FF7EDF]">
          vrinda
        </span>
        <ul className="flex flex-col gap-2 text-[13px] font-[Hanken_Grotesk] text-[#0A0F0D]">
          {links.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={item}>
                <button
                  onClick={handleClick(id)}
                  className="uppercase tracking-[0.15em] hover:text-[#5862E9] transition-colors"
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
