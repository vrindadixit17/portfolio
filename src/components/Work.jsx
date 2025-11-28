// src/components/Works.jsx
import React from "react";

export default function Works() {
  const items = [
    { id: 1, img: null },
    { id: 2, img: null },
    { id: 3, img: "../assests/folder.png" },  // center image column
    { id: 4, img: null },
    { id: 5, img: null }
  ];

  return (
    <section id="works" className="pt-10 pb-16">
      {/* TOP NAV INSIDE WORK SECTION (LIKE YOUR IMAGE) */}
      <div className="flex justify-end gap-8 mb-6 font-semibold text-sm tracking-wide">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a
          href="#works"
          className="px-3 py-1 rounded-md"
          style={{ background: "var(--pink)" }}
        >
          WORKS
        </a>
        <a href="#services">SERVICES</a>
        <a href="#work-two">WORKS</a>
      </div>

      {/* COLUMNS */}
      <div className="grid grid-cols-1 md:grid-cols-5">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* NUMBER BOX */}
            <div
              className="w-full h-[420px] flex items-center justify-center relative"
              style={{ background: "#0F0F0F" }}
            >
              {item.img ? (
                <>
                  <img
                    src={item.img}
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.92]"
                  />
                  <span className="relative z-10 big-number text-[10rem] md:text-[13rem] select-none">
                    {item.id}
                  </span>
                </>
              ) : (
                <span className="big-number text-[10rem] md:text-[13rem] select-none">
                  {item.id}
                </span>
              )}
            </div>

            {/* CAPTION */}
            <p className="mt-4 px-4 text-center text-xs text-[#222] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />Ut enim ad minim
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
