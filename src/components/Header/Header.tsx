import React from "react";
import { BsGithub } from "react-icons/bs";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <header>
      <HeaderWrapper>
        <h2>
          <Logo to="/">Mariia Odynska.</Logo>
        </h2>
        <a
          href="https://github.com/MariOdy"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <BsGithub />
        </a>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
