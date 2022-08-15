import React from "react";
import "./Hero.css";
import Resume from "../buttons/Resume";

const Hero: React.FC = () => {
  return (
    <section className="Hero container" id="anim-bg">
      <div className="Hero--info">
        <div>
          Hello, I'm
          <br />
          Mariia Odynska
          <br />
          <span>Frontend Developer</span>
        </div>
        <Resume />
      </div>

      <img src="./images/desk-worker.png" alt="" className="Hero--img" />
    </section>
  );
};

export default Hero;
