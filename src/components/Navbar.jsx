import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "scale-95 shadow-md" : "scale-100"
      }`}
    >
      <div className="flex items-center justify-between bg-[#CDDF3D] backdrop-blur-sm px-8 py-2 rounded-full shadow-sm font-[Hanken_Grotesk] text-[#222222] text-[15px] font-medium">
        {/* vrinda logo */}
        <div className="text-[34px] font-[Italianno] text-[#5862E9] mr-6 tracking-wide leading-none">
          vrinda
        </div>

        {/* nav links */}
        <ul className="flex space-x-6 items-center">
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
                        top: el.offsetTop - 60,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`transition-all duration-300 px-3 py-1 rounded-full ${
                    isActive
                      ? "bg-[#FDF9F5] text-[#222222] font-semibold"
                      : "text-[#222222] hover:text-[#5862E9]"
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
