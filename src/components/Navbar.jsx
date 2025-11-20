import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#FDF9F5] py-3">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-10">

        {/* Left Logo */}
        <div className="text-[40px] font-[Italianno] text-[#CDDF3D]">
          vrinda
        </div>

        {/* Center Navigation */}
        <div className="flex space-x-10 text-[#222222] font-[Hanken_Grotesk] text-[18px]">
          <a href="#home" className="hover:text-[#FF7EDF] transition">HOME</a>
          <a href="#about" className="hover:text-[#FF7EDF] transition">ABOUT</a>
          <a href="#works" className="hover:text-[#FF7EDF] transition">WORKS</a>
          <a href="#services" className="hover:text-[#FF7EDF] transition">SERVICES</a>
          <a href="#works" className="hover:text-[#FF7EDF] transition">WORKS</a>
        </div>

        {/* Right Logo */}
        <div className="text-[40px] font-[Italianno] text-[#FF7EDF]">
          portfolio
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
