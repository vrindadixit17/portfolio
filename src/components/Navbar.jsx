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
      className={`fixed top-0 right-0 w-full z-0 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-4xl font-italianno text-indigoMain tracking-wide">
          vrinda
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-10 text-dark font-hanken text-[15px] font-medium">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex flex-col justify-center items-end space-y-[5px] cursor-pointer">
          <span className="w-6 h-[2px] bg-dark"></span>
          <span className="w-4 h-[2px] bg-dark"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
