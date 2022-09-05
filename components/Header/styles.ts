import styled from "styled-components";
import Link from "next/link";
import Container from "components/Container";

export const HeaderWrapper = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;

export const Logo = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
