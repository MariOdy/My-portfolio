import React from "react";
import { AboutInfo, AboutMeWrapper, ImgWrapper } from "./styles";

const AboutMe: React.FC = () => {
  return (
    <AboutMeWrapper id='about-me'>
      <AboutInfo>
        <h3>About me</h3>
        <p>
          Hi, I'm 24 years old passionate front-end developer with a
          desire to learn and grow in a collaborative team environment. Skilled
          in HTML, CSS, and JavaScript. Excels at working with cross-browser
          compatibility issues.
        </p>
      </AboutInfo>
      <ImgWrapper>
        <img src="/images/me.jpg" alt="" />
      </ImgWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
