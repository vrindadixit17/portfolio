import React from "react";
import folder from "../assets/folder.png";  

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#FDF9F5] px-8">
        {/* Portfolio Title Image */}
        <div className="text-center mt-20">
            <h1 className="inline-flex items-end justify-center">
            {/* P O R T */}
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">P</span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">O</span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none -mr-[18px]">R</span>
            <span className="text-[#FF7EDF] font-[Tahoma] font-extrabold text-[90px] md:text-[130px] leading-none">T</span>

            {/* folio */}
            <span className="font-[Italianno] text-[#FF7EDF] text-[100px] md:text-[150px] font-normal leading-none ml-2 relative top-[28px] left-[-30px] ">
            folio
            </span>
            </h1>
        </div>



        {/* Folder image + side text */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8 md:gap-16">
        {/* Left text */}
        <p className="max-w-xs text-[#5862E9] text-center md:text-right text-sm md:text-base font-[Hanken_Grotesk] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel arcu non enim tincidunt aliquam.
        </p>

        {/* Folder image */}
        <img
          src={folder}
          alt="Folder "
          className="w-[280px] md:w-[340px] h-auto object-contain"
        />

        {/* Right text */}
        <p className="max-w-xs text-[#5862E9] text-center md:text-left text-sm md:text-base font-[Hanken_Grotesk] leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>
    </section>
  );
};

export default Hero;
