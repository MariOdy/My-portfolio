import React from "react";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { FaTelegramPlane } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { ContactCard, ContactsWrapper } from "./styles";

const Contacts: React.FC = () => (
  <>
    <Header />
    <ContactsWrapper as="section">
      <h2>Let&apos;s talk!</h2>
      <p>
        Write to me about anything! I&apos;m always happy to answer and provide
        you my professional help.
      </p>
      <div>
        <ContactCard
          href="https://t.me/Mari_ody"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegramPlane />
          <h3>Telegram</h3>
        </ContactCard>
        <ContactCard
          className="mail"
          href="mailto:mariody.work@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GoMail />
          <h3>Email</h3>
        </ContactCard>
      </div>
    </ContactsWrapper>
    <Footer />
  </>
);

export default Contacts;
