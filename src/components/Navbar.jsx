import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const triggerPoint = aboutSection.offsetTop - 100;
      const scroll = window.scrollY;

      if (scroll >= triggerPoint) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
          ${collapsed ? "justify-end gap-6" : "justify-center gap-12"}
        `}
      >
        {/* Logo */}
        {!collapsed && (
          <div className="absolute left-10 text-[38px] font-[Italianno] text-[#F08BD2]">
            vrinda
          </div>
        )}

        {/* Nav Links */}
        <ul
          className={`
            flex items-center transition-all duration-500
            ${collapsed ? "gap-4 text-[12px]" : "gap-10 text-[15px]"}
          `}
        >
          {["HOME", "ABOUT", "WORKS", "SERVICES", "WORKS"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-3 py-1 rounded-full hover:text-[#F08BD2] transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
