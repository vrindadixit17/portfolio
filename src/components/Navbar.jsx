import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "works", "services"];

      let current = "home";
      const scrollpos = window.scrollY + window.innerHeight * 0.3;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollpos >= el.offsetTop) current = id;
      });

      setActive(current);

      const aboutSection = document.getElementById("about");
      if (aboutSection && window.scrollY >= aboutSection.offsetTop - 120) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-500 
        ${collapsed ? "top-4 right-6 w-auto" : "top-6 left-0 w-full"}
      `}
    >
      <div
        className={`
          flex items-center transition-all duration-500
          ${collapsed ? "justify-end gap-6" : "justify-center gap-14"}
        `}
      >
        {/* Logo (only visible when expanded) */}
        {!collapsed && (
          <div className="absolute left-10 text-[44px] font-[Italianno] text-[#F08BD2]">
            vrinda
          </div>
        )}

        {/* NAV LINKS */}
        <ul
          className={`
            flex items-center transition-all duration-500
            ${collapsed ? "gap-4 text-[15px]" : "gap-10 text-[20px]"}
            font-[Hanken_Grotesk] font-semibold
          `}
        >
          {["home", "about", "works", "services", "works"].map((item) => (
            <li key={item} className="relative">
              {/* Pink pill highlight */}
              {active === item && (
                <span
                  className="
                    absolute inset-0 -z-10 
                    bg-[#FF7EDF]
                    rounded-full
                    px-4 py-1 
                    transition-all duration-300
                  "
                ></span>
              )}

              <a
                href={`#${item}`}
                className={`
                  px-4 py-1 
                  transition-all duration-300 
                  ${active === item ? "text-black" : "text-[#222] hover:text-[#F08BD2]"}
                `}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
