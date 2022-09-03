import React from "react";
import Resume from "components/buttons/Resume";
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
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { Container } from "components/Container";

const Contacts: React.FC = () => {
  return (
    <ContactsWrapper id="contacts">
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
    </ContactsWrapper>
  );
};

export default Contacts;
