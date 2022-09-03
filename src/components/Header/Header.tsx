import React from "react";
import { BsGithub } from "react-icons/bs";
import { LinkIcon } from "components/LinkIcon";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => {
  return (
    <header>
      <HeaderWrapper>
        <h2>
          <Logo to="/">Mariia Odynska.</Logo>
        </h2>
        <LinkIcon
          href="https://github.com/MariOdy"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <BsGithub />
        </LinkIcon>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
