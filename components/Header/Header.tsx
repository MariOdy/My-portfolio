import React from "react";
import { BsGithub } from "react-icons/bs";
import LinkIcon from "components/LinkIcon";
import { HeaderWrapper, Logo } from "./styles";

const Header: React.FC = () => (
  <header>
    <HeaderWrapper>
      <h2>
        <Logo href="/">
          <a>Mariia Odynska.</a>
        </Logo>
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

export default Header;
