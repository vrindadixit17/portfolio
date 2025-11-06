import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-italianno text-indigoMain tracking-wide">
            vrinda
          </h1>
        </div>

        {/* RIGHT: Nav Links inside a rounded container */}
        <div className="hidden md:flex bg-white/80 backdrop-blur-sm rounded-full shadow-sm px-6 py-2">
          <ul className="flex space-x-8 text-dark font-hanken text-[14px] font-medium">
            {["Home", "About", "Works", "Services", "Contact"].map((item) => (
              <li key={item} className="group relative cursor-pointer">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-300 group-hover:text-indigoMain"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-indigoMain transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex flex-col justify-center items-end space-y-[5px] cursor-pointer">
          <span className="w-6 h-[2px] bg-dark"></span>
          <span className="w-4 h-[2px] bg-dark"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
