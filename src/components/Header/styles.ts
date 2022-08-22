import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Container.styled";

export const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;

  svg {
    height: 20px;
  }

  a {
    display: flex;
    gap: 6px;
    font-size: 18px;

    &:hover {
      color: #ee8315;
    }
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 24px;
    }

    span {
      display: none;
    }
    svg {
      height: 24px;
    }
  }
`;

export const Logo = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
