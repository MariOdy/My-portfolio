import React from "react";
import Resume from "components/buttons/Resume";
import { BubblesBackground } from "components/BubblesBg";
import ContactMe from "components/buttons/ContactMe";
import {
  HeroWrapper,
  Content,
  Title,
  Description,
  HeroButtons,
  HeroImg,
} from "./styles";

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <BubblesBackground />
      <Content>
        <Title>
          Gorgeous Websites
          <br />
          Made just right ❤️
        </Title>
        <Description>
          Hey! My name is Mariia, I&apos;m a 24 years old Front-end developer
          from Ukraine
        </Description>
        <HeroButtons>
          <ContactMe />
          <Resume />
        </HeroButtons>
      </Content>
      <HeroImg src="./images/desk-worker.png" alt="" />
    </HeroWrapper>
  );
};

export default Hero;
