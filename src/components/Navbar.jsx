import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      const homeHeight = homeSection.offsetHeight;

      // collapse if scroll goes below home
      if (window.scrollY > homeHeight - 150) {
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
        fixed z-50 transition-all duration-700 
        ${collapsed 
          ? "top-4 right-6 w-auto" 
          : "bottom-6 left-1/2 -translate-x-1/2 w-[80%]"
        }
      `}
    >
      {/* NAV CONTAINER */}
      <div
        className={`
          flex items-center justify-center
          bg-[#CDDF3D] shadow-lg backdrop-blur-xl
          transition-all duration-700
          ${collapsed 
            ? "px-4 py-2 rounded-full text-sm" 
            : "px-10 py-3 rounded-full text-lg"
          }
        `}
      >
        {/* Links */}
        <div className="flex space-x-6 font-[Hanken_Grotesk] text-[#222]">

          <a href="#home" className="hover:text-[#5862E9] transition">HOME</a>
          <a href="#about" className="hover:text-[#5862E9] transition">ABOUT</a>
          <a href="#works" className="hover:text-[#5862E9] transition">WORKS</a>
          <a href="#services" className="hover:text-[#5862E9] transition">SERVICES</a>
          <a href="#contact" className="hover:text-[#5862E9] transition">CONTACT</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
