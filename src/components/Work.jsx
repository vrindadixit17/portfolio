import React from "react";

const Work = () => {
  return (
    <section className="work" data-aos="fade-up">
      <h2 className="script-title">my work</h2>
      <div className="work-cards">
        <div className="card" data-aos="zoom-in">
          <div className="card-image"></div>
          <h3>Google Developers Group</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-image"></div>
          <h3>Health App</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card" data-aos="zoom-in">
          <div className="card-image"></div>
          <h3>Feast Monster</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Work;
