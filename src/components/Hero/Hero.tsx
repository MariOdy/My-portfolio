import React from "react";

import Resume from "../buttons/Resume";
import { BubblesBackground } from "../BubblesBg";
import { HeroImgWrapper, HeroInfoWrapper, HeroWrapper } from "./styles";

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <BubblesBackground />
      <HeroInfoWrapper>
        <div>
          Gorgeous Websites
          <br />
          Made just right ❤️
        </div>
        <p>
          I'm a 24 years old React / Typescript Front-end developer from Ukraine
        </p>
        <Resume />
      </HeroInfoWrapper>
      <HeroImgWrapper>
        <img src="./images/desk-worker.png" alt="" />
      </HeroImgWrapper>
    </HeroWrapper>
  );
};

export default Hero;
