// src/components/Home.jsx
import React from "react";

// Import images from assets
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
        {images.map((img, i) => (
          <div
            key={i}
            className="device-frame w-[180px] md:w-[220px] flex-shrink-0 bg-black"
          >
            <div className="h-[360px] md:h-[400px] bg-white rounded-xl overflow-hidden">
              <img
                src={img}
                alt={`screen-${i}`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
