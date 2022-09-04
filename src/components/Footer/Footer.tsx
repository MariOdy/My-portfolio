import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { Container } from "components/Container";
import Resume from "components/buttons/Resume";
import {
  FooterWrapper,
  Title,
  Description,
  ContactsImg,
  ContactsInfo,
  Links,
  Socials,
  Email,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContactsInfo>
          <Title>Mariia Odynska.</Title>
          <Description>Frontend Developer from Ukraine</Description>
          <Links>
            <a href="#projects">Projects</a>
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
          </Links>
          <Email>mariody.work@gmail.com</Email>
          <Socials>
            <a
              href="https://www.linkedin.com/in/mariody/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100034116007528"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://instagram.com/just.tendril?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
            <a href="https://t.me/Mari_ody" target="_blank" rel="noreferrer">
              <BsTelegram />
            </a>
          </Socials>
          <Resume />
        </ContactsInfo>
        <ContactsImg>
          <img src="./images/contacts.png" alt="" />
        </ContactsImg>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
