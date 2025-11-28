// src/components/Home.jsx
import React from "react";

// Import your phone screenshots
import img1 from "../assets/Screenshot 2025-11-20 192853.png";
import img2 from "../assets/Screenshot 2025-11-20 192903.png";
import img3 from "../assets/Screenshot 2025-11-20 192912.png";
import img4 from "../assets/Screenshot 2025-11-20 192918.png";
import img5 from "../assets/Screenshot 2025-11-20 192924.png";

export default function Home() {
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
