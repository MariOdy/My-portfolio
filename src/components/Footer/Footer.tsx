import React from "react";
import Contacts from "./Contacts/Contacts";
import { FooterWrapper } from "./styles";

const Footer: React.FC = () => {
  return (
    <footer>
      <Contacts />
      <FooterWrapper>
        <h5>©2022 Made with ❤</h5>
      </FooterWrapper>
    </footer>
  );
};

export default Footer;
