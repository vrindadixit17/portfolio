import React, { useState, useEffect } from "react";

const navItems = ["Home", "About", "Works", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [compact, setCompact] = useState(false); // false = bottom, true = top-right

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "works", "contact"];
      const scrollMid = window.scrollY + window.innerHeight / 2;

      let found = false;
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollMid >= top && scrollMid < top + height) {
          setActiveSection(sec);
          found = true;
        }
      });

      if (!found && window.scrollY < 200) {
        setActiveSection("home");
      }

      // 🔁 collapse when we reach ABOUT (or below)
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const trigger = aboutEl.offsetTop - 120; // tweak if needed
        setCompact(window.scrollY >= trigger);
      } else {
        setCompact(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        compact
          ? "top-6 right-6 left-auto translate-x-0"
          : "bottom-6 left-1/2 -translate-x-1/2"
      }`}
    >
      <div
        className={`flex items-center gap-6 font-[Hanken_Grotesk] text-[14px] md:text-[15px] ${
          compact
            ? "bg-[#CDDF3D]/90 px-6 py-2 rounded-full shadow-md"
            : "bg-transparent px-4 py-2"
        }`}
      >
        {/* vrinda logo – stays, just shrinks into compact pill */}
        <div className="text-[30px] md:text-[34px] font-[Italianno] text-[#5862E9] leading-none">
          vrinda
        </div>

        <ul className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <button
                  onClick={handleClick(id)}
                  className={`transition-all duration-300 px-3 py-1 rounded-full ${
                    isActive
                      ? compact
                        ? "bg-[#FDF9F5] text-[#222222] font-semibold"
                        : "border-b-2 border-[#CDDF3D] text-[#222222]"
                      : compact
                      ? "text-[#222222] hover:text-[#5862E9]"
                      : "text-[#222222] hover:text-[#5862E9]"
                  }`}
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
