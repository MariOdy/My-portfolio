import styled from "styled-components";
import { Container } from "../../Container.styled";

export const AboutMeWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ccdaeb;
  margin: 50px auto;

  > div {
    flex: 1;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    max-width: 50%;
    border-radius: 50%;
  }
`;
