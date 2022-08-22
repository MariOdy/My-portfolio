import styled from "styled-components";
import { Container } from "../../Container.styled";

export const HeroWrapper = styled(Container)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 16px;
  position: relative;
  background-color: #ffdbb7;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const HeroInfoWrapper = styled.div`
  z-index: 3;

  flex: 1;
  font-size: 50px;
  font-weight: 700;
  min-height: 455px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  line-height: 55px;

  img {
    width: 60px;
    height: 60px;
  }

  p {
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
