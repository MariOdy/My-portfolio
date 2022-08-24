import React from "react";
import { AboutMeWrapper, ImgWrapper } from "./styles";

const AboutMe: React.FC = () => {
  return (
    <AboutMeWrapper>
      <div>
        <h3>About me</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          labore at eaque libero, magni tempora quam hic vitae nostrum saepe
          architecto minus esse id inventore porro. Porro sapiente sunt iure?
        </p>
      </div>
      <ImgWrapper>
        <img src="/images/me.jpg" alt="" />
      </ImgWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
