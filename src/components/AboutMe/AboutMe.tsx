import React from "react";
import {
  AboutInfo,
  AboutMeWrapper,
  Description,
  MyPhotoWrapper,
  Title,
} from "./styles";

const AboutMe: React.FC = () => (
  <AboutMeWrapper id="about">
    <AboutInfo>
      <Title>About me ⭐️</Title>
      <Description>
        I'm a passionate Web Developer and 3D Artist. I create{" "}
        <span>Pretty</span> Web Apps and Components, using modern CSS,
        accessible HTML and Next.js
      </Description>
    </AboutInfo>
    <MyPhotoWrapper>
      <img src="/images/me.jpg" alt="me" />
    </MyPhotoWrapper>
  </AboutMeWrapper>
);

export default AboutMe;
