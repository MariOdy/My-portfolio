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
        <h2>Contacts</h2>
        
        <Resume />
      </ContactsInfo>
    </ContactsWrapper>
  );
};

export default Contacts;
