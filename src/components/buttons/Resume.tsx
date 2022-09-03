import React from "react";
import { TransparentButton } from "./styles";

const Resume: React.FC = () => {
  return (
    <TransparentButton as="a" href="/files/resume.pdf" target="_blank">
      My Resume
    </TransparentButton>
  );
};

export default Resume;
