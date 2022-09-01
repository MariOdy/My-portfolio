import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../Container.styled";

export const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  font-size: 30px !important;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
