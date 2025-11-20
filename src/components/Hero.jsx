import React from "react";
// TEMPORARY placeholders — replace with your real images
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#FDF9F5] flex flex-col items-center pt-10 pb-16"
    >
      {/* ========== TOP BAR ========== */}
      <div className="w-full flex justify-between px-12 mb-6">
        <h1 className="font-[Italianno] text-[48px] text-[#FF7EDF]">
          vrinda
        </h1>

        <h1 className="font-[Italianno] text-[48px] text-[#FF7EDF]">
          portfolio
        </h1>
      </div>

      {/* ========== PHONE MOCKUP ROW ========== */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
        <img src={phone1} className="w-[160px] md:w-[200px]" alt="" />
        <img src={phone2} className="w-[160px] md:w-[200px]" alt="" />
        <img src={phone3} className="w-[160px] md:w-[200px]" alt="" />
        <img src={phone4} className="w-[160px] md:w-[200px]" alt="" />
        <img src={phone5} className="w-[160px] md:w-[200px]" alt="" />
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav className="flex gap-10 md:gap-16 text-[#222] font-[Hanken_Grotesk] text-[18px]">
        <a href="#home" className="hover:text-[#FF7EDF]">HOME</a>
        <a href="#about" className="hover:text-[#FF7EDF]">ABOUT</a>
        <a href="#works" className="hover:text-[#FF7EDF]">WORKS</a>
        <a href="#services" className="hover:text-[#FF7EDF]">SERVICES</a>
        <a href="#works" className="hover:text-[#FF7EDF]">WORKS</a>
      </nav>
    </section>
  );
};

export default Hero;
