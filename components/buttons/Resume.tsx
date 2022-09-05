import React from "react";
import { TransparentButton } from "./styles";

const Resume: React.FC = () => (
  <TransparentButton as="a" href="/files/resume.pdf" target="_blank">
    My Resume
  </TransparentButton>
);

export default Resume;
