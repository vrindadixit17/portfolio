import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const getBoxForIndex = (index) => {
    const container = containerRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return null;
    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return { left: r.left - cRect.left, width: r.width };
  };

  const moveIndicator = (toIndex) => {
    const box = getBoxForIndex(toIndex);
    const ind = indicatorRef.current;
    if (!box || !ind) return;
    ind.style.width = `${box.width}px`;
    ind.style.transform = `translateX(${box.left}px)`;
  };

  useEffect(() => {
    const handleResize = () => {
      moveIndicator(hoverIndex ?? activeIndex);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, hoverIndex]);

  useEffect(() => {
    if (hoverIndex !== null) moveIndicator(hoverIndex);
    else moveIndicator(activeIndex);
  }, [activeIndex, hoverIndex]);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative">
          {/* logo/name */}
          <div className="text-xl font-semibold text-emerald-600">Vrinda</div>

          {/* navigation */}
          <nav ref={containerRef} className="relative">
            {/* sliding indicator */}
            <div
              ref={indicatorRef}
              className="pointer-events-none absolute -bottom-1 h-[3px] bg-emerald-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: 0, transform: "translateX(0px)" }}
            />

            <ul className="flex gap-6 px-4 py-2">
              {navItems.map((item, i) => (
                <li
                  key={item.id}
                  ref={(el) => (itemRefs.current[i] = el)}
                  className="relative"
                >
                  <button
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onFocus={() => setHoverIndex(i)}
                    onBlur={() => setHoverIndex(null)}
                    className={`px-2 py-1 text-sm font-medium transition-colors duration-150 focus:outline-none ${
                      i === activeIndex
                        ? "text-emerald-700"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* optional contact button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="ml-4 px-4 py-1.5 rounded-md bg-emerald-600 text-white text-sm font-medium shadow-sm hover:bg-emerald-700 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
