import React from "react";

// Correct imports from your assets folder
import phone1 from "../assets/Screenshot 2025-11-20 192853.png";
import phone2 from "../assets/Screenshot 2025-11-20 192903.png";
import phone3 from "../assets/Screenshot 2025-11-20 192912.png";
import phone4 from "../assets/Screenshot 2025-11-20 192918.png";
import phone5 from "../assets/Screenshot 2025-11-20 192924.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#FDF9F5] flex flex-col items-center justify-center px-4 md:px-10"
    >
      {/* row of 5 phone mockups */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-10">
        <img
          src={phone1}
          alt="phone 1"
          className="w-[160px] md:w-[220px] h-auto object-contain"
        />
        <img
          src={phone2}
          alt="phone 2"
          className="w-[160px] md:w-[220px] h-auto object-contain"
        />
        <img
          src={phone3}
          alt="phone 3"
          className="w-[160px] md:w-[220px] h-auto object-contain"
        />
        <img
          src={phone4}
          alt="phone 4"
          className="w-[160px] md:w-[220px] h-auto object-contain"
        />
        <img
          src={phone5}
          alt="phone 5"
          className="w-[160px] md:w-[220px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
