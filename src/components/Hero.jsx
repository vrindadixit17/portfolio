import React from "react";

// Import your 5 phone screens
import phone1 from "../assets/Screenshot 2025-11-20 192853.png";
import phone2 from "../assets/Screenshot 2025-11-20 192903.png";
import phone3 from "../assets/Screenshot 2025-11-20 192912.png";
import phone4 from "../assets/Screenshot 2025-11-20 192918.png";
import phone5 from "../assets/Screenshot 2025-11-20 192924.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#FDF9F5] flex flex-col items-center pt-16 pb-10">

      {/* ----------- 5 Phones Row ----------- */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4">
        <img src={phone1} alt="phone 1" className="w-[180px] md:w-[220px]" />
        <img src={phone2} alt="phone 2" className="w-[180px] md:w-[220px]" />
        <img src={phone3} alt="phone 3" className="w-[180px] md:w-[220px]" />
        <img src={phone4} alt="phone 4" className="w-[180px] md:w-[220px]" />
        <img src={phone5} alt="phone 5" className="w-[180px] md:w-[220px]" />
      </div>

      {/* ----------- Bottom Navigation Row ----------- */}
      <div className="w-full flex justify-between items-center px-10 mt-12">

        {/* Left Logo */}
        <div className="text-[45px] font-[Italianno] text-[#CDDF3D]">
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
        <div className="text-[45px] font-[Italianno] text-[#FF7EDF]">
          portfolio
        </div>

      </div>
    </section>
  );
};

export default Hero;
