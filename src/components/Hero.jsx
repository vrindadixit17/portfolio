import React from "react";

const Hero = () => {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-text">
        <h1>
          <span className="pink">PORT</span>
          <span className="script">folio</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
          minima veniam, quis nostrum exercitationem ullam laboriosam nihil.
        </p>
        <div className="buttons">
          <button>Available for new opportunities</button>
          <button>Contact me</button>
        </div>
      </div>
      <div className="hero-image" data-aos="fade-left">
        <div className="rect red"></div>
        <div className="rect orange"></div>
        <div className="rect gray"></div>
      </div>
    </section>
  );
};

export default Hero;
