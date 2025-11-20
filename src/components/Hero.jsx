import React from "react";

// Import your uploaded phone images
import phone1 from "/mnt/data/Screenshot 2025-11-20 192853.png";
import phone2 from "/mnt/data/Screenshot 2025-11-20 192903.png";
import phone3 from "/mnt/data/Screenshot 2025-11-20 192912.png";
import phone4 from "/mnt/data/Screenshot 2025-11-20 192918.png";
import phone5 from "/mnt/data/Screenshot 2025-11-20 192924.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#FDF9F5] flex flex-col items-center pt-16 pb-10">

      {/* 5 Phones Row */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4">
        <img src={phone1} alt="phone 1" className="w-[180px] md:w-[220px]" />
        <img src={phone2} alt="phone 2" className="w-[180px] md:w-[220px]" />
        <img src={phone3} alt="phone 3" className="w-[180px] md:w-[220px]" />
        <img src={phone4} alt="phone 4" className="w-[180px] md:w-[220px]" />
        <img src={phone5} alt="phone 5" className="w-[180px] md:w-[220px]" />
      </div>

      {/* Bottom Navigation */}
      <div className="w-full flex justify-between items-center px-10 mt-12">
        {/* Left Logo */}
        <div className="text-[45px] font-[Italianno] text-[#CDDF3D]">
          vrinda
        </div>

        {/* Center Nav */}
        <ul className="flex gap-10 text-[#222222] font-[Hanken_Grotesk] text-[18px]">
          <li className="hover:text-[#5862E9] cursor-pointer">HOME</li>
          <li className="hover:text-[#5862E9] cursor-pointer">ABOUT</li>
          <li className="hover:text-[#5862E9] cursor-pointer">WORKS</li>
          <li className="hover:text-[#5862E9] cursor-pointer">SERVICES</li>
          <li className="hover:text-[#5862E9] cursor-pointer">WORKS</li>
        </ul>

        {/* Right Logo */}
        <div className="text-[45px] font-[Italianno] text-[#FF7EDF]">
          portfolio
        </div>
      </div>

    </section>
  );
};

export default Hero;
