import React from "react";
import Resume from "components/buttons/Resume";
import { BubblesBackground } from "components/BubblesBg";
import ContactMe from "components/buttons/ContactMe";
import {
  HeroButtons,
  HeroImgWrapper,
  HeroInfoWrapper,
  HeroWrapper,
} from "./styles";

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <BubblesBackground />
      <HeroInfoWrapper>
        <div>
          <span>Gorgeous Websites</span>
          <span className="smart-code">Smart Code</span>
          <br />
          Made just right ❤️
        </div>
        <p>
          I'm a 24 years old React / Typescript Front-end developer from Ukraine
        </p>
        <HeroButtons>
          <ContactMe />
          <Resume />
        </HeroButtons>
      </HeroInfoWrapper>
      <HeroImgWrapper>
        <img src="./images/desk-worker.png" alt="" />
      </HeroImgWrapper>
    </HeroWrapper>
  );
};

export default Hero;
