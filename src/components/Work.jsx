// src/components/Work.jsx
import React from "react";

/* Simple layout that mimics the large numbered vertical tiles.
   Replace images and text as needed.
*/
export default function Work() {
  const items = [1,2,3,4,5];
  return (
    <section id="works" className="py-8">
      <div className="flex items-end gap-4">
        {items.map((num, idx) => (
          <div key={num} className="flex-1 bg-[#111] text-center py-12 md:py-24">
            {/* center column (3) shows image behind number */}
            {num === 3 ? (
              <div className="relative h-full">
                <img src="/mnt/data/landing.jpg" alt="proj" className="absolute inset-0 object-cover w-full h-full opacity-90" />
                <div className="relative z-10 flex items-end justify-center h-full">
                  <div className="text-[8rem] md:text-[12rem] big-number leading-none select-none">{num}</div>
                </div>
              </div>
            ) : (
              <div className="text-[8rem] md:text-[12rem] big-number leading-none select-none">{num}</div>
            )}
            <p className="text-xs text-gray-400 mt-3 px-2">Short caption / project blurb goes here</p>
          </div>
        ))}
      </div>
    </section>
  );
}
