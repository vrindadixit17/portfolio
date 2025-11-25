import React from "react";
import workImg from "../assets/me.png"; // replace with your real img

const Works = () => {
  return (
    <section id="works" className="w-full bg-[#FDF9F5] pt-32">

      {/* 5 Column Cards */}
      <div className="grid grid-cols-5 w-full">
        
        {/* Card 1 */}
        <div className="h-[650px] bg-[#1A1A1A] flex items-center justify-center">
          <h1 className="text-[350px] font-[BebasNeue] text-[#D9FF33] leading-none">
            1
          </h1>
        </div>

        {/* Card 2 */}
        <div className="h-[650px] bg-[#1A1A1A] flex items-center justify-center">
          <h1 className="text-[350px] font-[BebasNeue] text-[#D9FF33] leading-none">
            2
          </h1>
        </div>

        {/* Card 3 – with image */}
        <div className="h-[650px] bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
          <img
            src={workImg}
            alt="work"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Card 4 */}
        <div className="h-[650px] bg-[#1A1A1A] flex items-center justify-center">
          <h1 className="text-[350px] font-[BebasNeue] text-[#D9FF33] leading-none">
            4
          </h1>
        </div>

        {/* Card 5 */}
        <div className="h-[650px] bg-[#1A1A1A] flex items-center justify-center">
          <h1 className="text-[350px] font-[BebasNeue] text-[#D9FF33] leading-none">
            5
          </h1>
        </div>

      </div>

      {/* Bottom captions */}
      <div className="grid grid-cols-5 text-center text-[12px] mt-6 px-6 text-[#C58DF2] leading-relaxed">
        <p>Lorem ipsum dolor sit amet… Ut enim ad minim</p>
        <p>Lorem ipsum dolor sit amet… Ut enim ad minim</p>
        <p>Lorem ipsum dolor sit amet… Ut enim ad minim</p>
        <p>Lorem ipsum dolor sit amet… Ut enim ad minim</p>
        <p>Lorem ipsum dolor sit amet… Ut enim ad minim</p>
      </div>
    </section>
  );
};

export default Works;
