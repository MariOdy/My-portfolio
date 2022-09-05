import React from "react";
import { SolidButton } from "./styles";

const ContactMe: React.FC = () => (
  <SolidButton as="a" href="/contacts">
    Contact me
  </SolidButton>
);

export default ContactMe;