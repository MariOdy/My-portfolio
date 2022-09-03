import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "components/Container";

export const HeaderWrapper = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const Logo = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
