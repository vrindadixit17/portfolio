// src/components/Home.jsx
import React from "react";

// Import your phone screenshots
import img1 from "../assets/5.png";
import img2 from "../assets/4.png";
import img3 from "../assets/1.png";
import img4 from "../assets/2.png";
import img5 from "../assets/3.png";

export default function Hero() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section id="home" className="py-10">
      <div className="flex justify-center gap-8 overflow-x-auto px-4">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={img}
              alt={`phone-${index}`}
              className="w-[180px] md:w-[220px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
