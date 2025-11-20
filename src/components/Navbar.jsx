import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const triggerPoint = aboutSection.offsetTop - window.innerHeight / 3;

        // 👉 shrink navbar when reaching ABOUT section
        setShrink(window.scrollY > triggerPoint);
      }

      // 👉 detect active section
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-[200] transition-all duration-700 ease-[cubic-bezier(.25,.1,.25,1)]
        ${shrink ? "top-6 right-6 left-auto" : "top-8 left-1/2 -translate-x-1/2"}
      `}
    >
      <div
        className={`flex items-center justify-center bg-[#CDDF3D] text-[#0A0F0D]
        rounded-full shadow-md transition-all duration-700
        ${shrink ? "px-6 py-2 scale-75" : "px-10 py-3 scale-100"}
      `}
      >
        <ul className="flex space-x-6 font-[Hanken_Grotesk] text-[14px] font-medium">
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
                  className={`px-3 py-1 rounded-full transition-all duration-300 ${
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
