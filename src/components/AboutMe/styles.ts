import styled from "styled-components";
import { Container } from "../../Container.styled";

export const AboutMeWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ccdaeb;
  margin: 50px auto;
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  h3 {
    font-size: 26px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 50%;
    border-radius: 50%;
  }
`;
