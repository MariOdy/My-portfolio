import styled from "styled-components";
import { Container } from "../../Container.styled";

export const HeroWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;
  background-color: #ccdaeb;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const HeroInfoWrapper = styled.div`
  z-index: 3;

  flex: 1.3;
  font-size: 60px;
  font-weight: 700;
  min-height: 455px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  line-height: 70px;

  img {
    width: 60px;
    height: 60px;
  }

  p {
    width: 80%;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
  }
`;

export const HeroImgWrapper = styled.div`
  z-index: 3;
  flex: 1;

  img {
    max-width: 100%;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`;
