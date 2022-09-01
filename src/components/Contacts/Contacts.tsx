import React from "react";
import Resume from "../buttons/Resume";
import {
  ContactsImg,
  ContactsInfo,
  ContactsWrapper,
  Links,
  Socials,
  Email,
} from "./styles";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { Container } from "../../Container.styled";

const Contacts: React.FC = () => {
  return (
    <ContactsWrapper>
      <Container>
        <ContactsInfo>
          <h2>Mariia Odynska.</h2>
          <h4>Frontend Developer from Ukraine</h4>
          <Links>
            <a href="#my-projects">Projects</a>
            <a href="#about-me">About me</a>
            <a href="#work-types">Skills</a>
          </Links>
          <Email>mariody.work@gmail.com</Email>
          <Socials>
            <a href="https://www.linkedin.com/in/mariody/">
              <BsLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100034116007528">
              <BsFacebook />
            </a>
            <a href="https://instagram.com/just.tendril?igshid=YmMyMTA2M2Y=">
              <BsInstagram />
            </a>
            <a href="https://github.com/MariOdy">
              <BsGithub />
            </a>
            <a href="https://t.me/Mari_ody">
              <BsTelegram />
            </a>
          </Socials>
          <Resume />
        </ContactsInfo>
        <ContactsImg>
          <img src="./images/contacts.png" alt="" />
        </ContactsImg>
      </Container>
    </ContactsWrapper>
  );
};

export default Contacts;
