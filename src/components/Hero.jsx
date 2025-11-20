import React from "react";

// Import your 5 phone screens
import phone1 from "../assets/Screenshot 2025-11-20 192853.png";
import phone2 from "../assets/Screenshot 2025-11-20 192903.png";
import phone3 from "../assets/Screenshot 2025-11-20 192912.png";
import phone4 from "../assets/Screenshot 2025-11-20 192918.png";
import phone5 from "../assets/Screenshot 2025-11-20 192924.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#FDF9F5] flex flex-col items-center py-10">

      {/* Row of 5 Phones */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-2">
        <img src={phone1} alt="phone1" className="w-[210px] md:w-[260px]" />
        <img src={phone2} alt="phone2" className="w-[210px] md:w-[260px]" />
        <img src={phone3} alt="phone3" className="w-[210px] md:w-[260px]" />
        <img src={phone4} alt="phone4" className="w-[210px] md:w-[260px]" />
        <img src={phone5} alt="phone5" className="w-[210px] md:w-[260px]" />
      </div>

    </section>
  );
};

export default Hero;
