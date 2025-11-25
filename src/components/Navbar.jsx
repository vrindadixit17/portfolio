// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-4">
        <div className="text-[var(--pink)] font-italianno text-2xl select-none">vrinda</div>
      </div>

      <nav className="hidden md:flex gap-8 items-center font-semibold text-sm tracking-wider">
        <a className="hover:opacity-80" href="#home">HOME</a>
        <a className="hover:opacity-80" href="#about">ABOUT</a>
        <a className="hover:opacity-80" href="#works">WORKS</a>
        <a className="hover:opacity-80" href="#services">SERVICES</a>
        <a className="hover:opacity-80" href="#work-two">WORKS</a>
      </nav>

      <div className="hidden md:block">
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-sm font-medium text-white nav-pill"
        >
          portfolio
        </a>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <button aria-label="open menu" className="p-2 border rounded">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="2" rx="1" fill="#222"/>
            <rect y="6" width="22" height="2" rx="1" fill="#222"/>
            <rect y="12" width="22" height="2" rx="1" fill="#222"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
