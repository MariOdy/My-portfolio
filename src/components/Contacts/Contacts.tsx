import React from "react";
import Resume from "../buttons/Resume";
import { ContactsImg, ContactsInfo, ContactsWrapper } from "./styles";

const Contacts: React.FC = () => {
  return (
    <ContactsWrapper>
      <ContactsImg>
        <img src="./images/contacts.png" alt="" />
      </ContactsImg>

      <ContactsInfo>
        <h2>Get in touch with us!</h2>
        <p>
          Whether you want to learn about UX or need product design services let
          us help with your challenge.
        </p>
        <Resume />
      </ContactsInfo>
    </ContactsWrapper>
  );
};

export default Contacts;
