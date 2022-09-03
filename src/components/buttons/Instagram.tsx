import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { SolidButton } from "./styles";

const Instagram: React.FC = () => {
  return (
    <SolidButton as="a" href="https://www.instagram.com/just.tendril">
      <span>My Works</span>
      <BsArrowRightShort />
    </SolidButton>
  );
};

export default Instagram;
