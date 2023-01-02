import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import Container from "components/Container";
import Resume from "components/buttons/Resume";
import Link from "next/link";
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

const Footer: React.FC = () => (
  <FooterWrapper>
    <Container>
      <ContactsInfo>
        <Title>Mariia Odynska.</Title>
        <Description>Frontend Developer from Ukraine</Description>
        <Links>
          <Link href="/#projects">Projects</Link>
          <Link href="/#about">About me</Link>
          <Link href="/#skills">Skills</Link>
        </Links>
        <Email
          href="mailto:mariody.work@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          mariody.work@gmail.com
        </Email>
        <Socials>
          <Link
            href="https://www.linkedin.com/in/mariody/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100034116007528"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://instagram.com/just.tendril?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </Link>
          <Link href="https://t.me/Mari_ody" target="_blank" rel="noreferrer">
            <BsTelegram />
          </Link>
        </Socials>
        <Resume />
      </ContactsInfo>
      <ContactsImg>
        <img src="./images/contacts.png" alt="" />
      </ContactsImg>
    </Container>
  </FooterWrapper>
);

export default Footer;
