import styled from "styled-components";
import { Container } from "../../Container.styled";

export const AboutMeWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ccdaeb;
  margin: 30px auto;
  margin-top: 70px;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 12px;
  }
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

  @media (max-width: 640px) {
    align-items: center;
    p {
      width: 110%;
    }
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
