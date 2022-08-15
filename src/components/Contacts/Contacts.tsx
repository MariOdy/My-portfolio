import React from "react";
import "./Contacts.css";
import Resume from "../buttons/Resume";

const Contacts: React.FC = () => {
  return (
    <section className="Contacts container">
      <h2>Get in touch with us!</h2>
      <p>
        Whether you want to learn about UX or need product design services let
        us help with your challenge.
      </p>
      <Resume />
      <img src="./images/contacts.png" alt="" />
    </section>
  );
};

export default Contacts;
