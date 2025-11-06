import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // shrink navbar when scrolling
      setScrolled(window.scrollY > 20);

      // detect active section
      const sections = ["home", "about", "works", "services", "contact"];
      const scrollMid = window.scrollY + window.innerHeight / 2;

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollMid >= top && scrollMid < top + height) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className = "fixed top-5 left-0 w-full z-50 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-50">
        {/* Left - Logo */}
        <div className="text-2xl font-italianno text-[#CDDF3D] text-[40px] tracking-wide">
          vrinda
        </div>

        {/* Right - Nav Links */}
        <ul className="hidden md:flex space-x-6 text-[#0A0F0D] font-hanken text-[15px] font-medium items-center bg-[#CDDF3D] backdrop-blur-sm px-6 py-2 rounded-full shadow-sm">
          {["Home", "About", "Works", "Services", "Contact"].map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <a
  href={`#${id}`}
  onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 60, // adjust for navbar height
        behavior: "smooth",
      });
    }
  }}
  className={`relative transition-all duration-200 px-3 py-1 rounded-full ${
    isActive
      ? "bg-[#FDF9F5] text-[#0A0F0D] font-semibold"
      : "text-[#0A0F0D] hover:text-[#5862E9]"
  }`}
>
  {item}
</a>

              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
